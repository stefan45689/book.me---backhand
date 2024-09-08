import { log } from "console";
import reservationService from "../services/reservation-service";
import { Request, Response } from "express";


let data: any = [];
const getAllReservations = async (req: Request, res: Response) => {
    data = await reservationService.getAllReservations() 
    res.send(data);
}

const getReservationByUserId = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    data = await reservationService.getReservationByUserId(id);
    res.send(data);
}

const createNewReservation = async (req: Request, res: Response) => {
     data = await reservationService.createNewReservation(req.body);
     res.send(data);
}

const checkAvailability = async (req: Request, res: Response) => {
    console.log('Check-Availability')          
    const unit_id = parseInt(req.query.unit_id as string);

    //const start_date = req.query;           console.log(start_date)
    //const end_date = req.query;             console.log(end_date)
    console.log(unit_id)

    const startDate =  new Date(req.query.start_date as unknown as string);
    const endDate = new Date(req.query.end_date as unknown as string);    

    console.log('Start Date:', startDate, 'End Date:', endDate)
    data = await reservationService.checkAvailability(unit_id, startDate, endDate);
    res.send(data);
}

const updateReservation = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    data = await reservationService.updateReservation(req.body, id);
}

const deleteReservation = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    data = await reservationService.deleteReservation(id);
    res.send(data);
}

export default { getAllReservations, getReservationByUserId, createNewReservation, 
                 checkAvailability, updateReservation,deleteReservation}