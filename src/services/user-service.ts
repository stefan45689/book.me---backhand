import userRepository from "../repositories/user-repository";
import crypto from 'crypto'
import jwt from 'jsonwebtoken'

const signUp = async (user: any) => {
    user.hashed_password = crypto.createHash('md5').update(user.password).digest('hex');
    const result = await userRepository.signUp(user);

    if (result.affectedRows > 0) {
        const token = jwt.sign({
            username: user.username,
            email: user.email,
            role: user.role,
        }, 'SECRET');
        
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
        console.log(result);
        
        const token = jwt.sign({
           username: user.username,
           role : user.role
        }, 'SECRET')

        return { success: true, token}
    }
    else {
        return { success: false, result}
    }
}

export default { signUp, login}

