import { Request, Response, NextFunction } from "express";
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv';

interface AuthenticatedRequest extends Request {
    user?: any;
}   

//user middleware
dotenv.config();
if (!process.env.SECRET_KEY) {
   throw new Error('SECRET_KEY is not defined in the .env file');
 }
 
const SECRET_KEY = process.env.SECRET_KEY;   console.log(`SECRET_KEY: ${SECRET_KEY}`)

const authenticateToken = (req: AuthenticatedRequest, res: Response, next: NextFunction): Response | void => {
   const authHeader = req.headers['authorization'];
   const token = authHeader && authHeader.split(' ')[1];
 
   if (!token) {
     return res.sendStatus(401); // Unauthorized
   }
   
    console.log('Token:', token)

   jwt.verify(token, SECRET_KEY, (error: any, user: any) => {
       if (error) {
           return res.status(403).json({ msg: 'Failed to authenticate token', error }); // Forbidden
         }
     req.user = user;
     next();
   });
 };


export default authenticateToken




/*import { expressjwt } from "express-jwt";

const middleware = expressjwt ({
    secret: 'SECRET',
    algorithms: [ "HS256"],
    requestProperty: 'userData'
})

export default middleware;
*/