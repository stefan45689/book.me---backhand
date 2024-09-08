import express from "express";
import cors from 'cors';
import 'reflect-metadata';
import dbConnection from './dbConnection'
import { getRepository } from 'typeorm';
import unitRouter from "./routers/unit-router";
import reservationRouter from "./routers/reservation-router";
import reviewRouter from "./routers/review-router";
import userRouter from "./routers/user-router";
//import path from "path";
import fileRouter from "./file-upload";
import path from "path";
//import authenticateToken from "./middleware/middleware";
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import crypto from 'crypto';
import { User } from "../models/User";
import dotenv from 'dotenv'

const app = express ();
app.use(express.json());
app.use(cors());
app.use(express.static(path.join( __dirname, '..' ,'public')))

app.use('/unit', unitRouter); 
//app.use('/search', unitRouter)
app.use('/reservation', reservationRouter);
app.use('/review', reviewRouter)
app.use(userRouter);
app.use(fileRouter);

/*interface AuthenticatedRequest extends Request {
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

    jwt.verify(token, SECRET_KEY, (error, user) => {
        if (error) {
            return res.status(403).json({ msg: 'Failed to authenticate token', error }); // Forbidden
          }
      req.user = user;
      next();
    });
  };

app.get('/me', authenticateToken, async (req: AuthenticatedRequest, res: Response) => {
    try {
     const userId = req.user?.id;
     if (!userId) {
        return res.status(400).json({ message: 'Invalid user credentials' });
    }
  
      const userRepo = dbConnection.getRepository(User);
      const user = await userRepo.findOneBy({id: userId});
  
      if (!user) {
        return res.status(404).json({ msg: 'User not found' });
      }
      
      console.log('User:', user)

      res.json({
        user_id: user.id,
        user_username: user.username,
      });
    } 
    catch (error) {
      console.error('Error fetching user:', error);
      res.status(500).json({ msg: 'Internal server error' });
    }
  });
*/

  dbConnection.initialize ()
  .then (() => { console.log('Connected to the DB!') })
  .catch ((e: any) => { console.log(e) })  
          

app.listen(3000, () => {
    console.log('Server is listening at port 3000'); 
})
