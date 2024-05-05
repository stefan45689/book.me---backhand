import express from "express";
import cors from 'cors';
import 'reflect-metadata';
import dbConnection from './dbConnection'

import unitRouter from "./routers/unit-router";
import reservationRouter from "./routers/reservation-router";
import reviewRouter from "./routers/review-router";
import userRouter from "./routers/user-router";
//import path from "path";
import fileRouter from "./file-upload";

const app = express ();
app.use(express.json());
app.use(cors());
app.use(express.static('public'))

app.use('/unit', unitRouter); 
//app.use('/search', unitRouter)
app.use('/reservation', reservationRouter);
app.use('/review', reviewRouter)
app.use(userRouter);
app.use(fileRouter);

dbConnection.initialize ()
    .then (() => { console.log('Connected to the DB!') })
    .catch ((e: any) => { console.log(e) })

app.listen(3000, () => {
    console.log('Server is listening at port 3000'); 
})