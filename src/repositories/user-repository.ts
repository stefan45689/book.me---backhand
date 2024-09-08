import { result } from "lodash";
import dbConnection from "../dbConnection";

const signUp = async (user: any) => {
    try {
        const result = await dbConnection.query(`insert into users (username, email, password, role, created, updated)
                                           values (?, ? , ? , ?, now(), now())`, 
                                           [user.username, user.email, user.password, user.role = 'user']);
        return result;
    }
    catch (e: any) {
        return { success: false, msg: e.message}
    }
}

const login =async (user: any) => {
    try {
    const result = await dbConnection.query('select * from users where username = ? AND password = ?',
                                             [user.username, user.password])
   
        return result;
    }

    catch (e: any) {
        return { success: false, msg: e.message}
    }  
}

const getUserById = async (id: number) => {
    try {
        console.log(`Fetching user with id: ${id}`)
        const result = await dbConnection.query(`select * from Users where id = ?`, [id])
 
        console.log(result)
        return result;
    }
    catch (e: any) {
        return null
    }
}

export default { signUp, login, getUserById} ;
