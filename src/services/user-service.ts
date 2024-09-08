import userRepository from "../repositories/user-repository";
import crypto from 'crypto'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

//const SECRET_KEY = crypto.randomBytes(64).toString('hex')
dotenv.config();

if (!process.env.SECRET_KEY) {
    throw new Error('SECRET_KEY is not defined in the .env file');
  }

const SECRET_KEY = process.env.SECRET_KEY;

const signUp = async (user: any) => {
    user.hashed_password = crypto.createHash('md5').update(user.password).digest('hex');
    const result = await userRepository.signUp(user);

    if (result.affectedRows > 0) {
        const token = jwt.sign({
            username: user.username,
            email: user.email,
            password: user.password,
            role: 'user',
        }, SECRET_KEY, {expiresIn:'1h'});
        
        return { success: true, token}
    }
    else {
        return { success: false, result}
    }
}

const login = async (user: any) => {
    user.hashed_password = crypto.createHash('md5').update(user.password).digest('hex')
    const result = await userRepository.login(user);
    
    if (result && result.length > 0) {
        console.log('Login user:',result);
        
        const token = jwt.sign({
           id: result.id,
           username: result.username,
           password: result.password
        }, SECRET_KEY, {expiresIn: '1h'})
        console.log('Token:', token, 'SECRET_KEY:', SECRET_KEY)
        return { success: true, token, user: result}
    }
    else {
        return { success: false, result}
    }
}

const getUserById =async (id: number) => {
    const result = await userRepository.getUserById(id)

    if (result && result.length > 0) {
        console.log(result)

        const token = jwt.sign({
            id: result[0].id,
            username: result[0].username
         }, SECRET_KEY, {expiresIn: '1h'}) 
        console.log('Token:', token, 'SECRET_KEY:', SECRET_KEY)
        return { success: true, token, result}    
    }
    else {
        return { success: false, result}
    }
}

export default { signUp, login, getUserById}

