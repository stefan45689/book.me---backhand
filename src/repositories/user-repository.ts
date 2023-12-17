import { result } from "lodash";
import dbConnection from "../dbConnection";

const signUp = async (user: any) => {
    try {
        const result = await dbConnection.query(`insert into users (username, email, password, role, created, updated)
                                           values (?, ? , ? , ?, now(), now())`, 
                                           [user.username, user.email, user.password, user.role]);
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
export default { signUp, login} ;
