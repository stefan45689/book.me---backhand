import { Console } from "console";
import reservationService from "../services/reservation-service";
import { Request, Response } from "express";
import moment from "moment";

let data: any = [];
const getAllReservations = async (req: Request, res: Response) => {
    data = await reservationService.getAllReservations() 
    res.send(data);
}

const getReservationByUnitId = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    data = await reservationService.getReservationByUnitId(id);
    res.send(data);
}

const createNewReservation = async (req: Request, res: Response) => {
     data = await reservationService.createNewReservation(req.body);
     res.send(data);
}

const checkAvailability = async (req: Request, res: Response) => {
    console.log('Check-Availability')
    const unit_id = parseInt(req.query.unit_id as string);
    const start_date =  new Date(req.query.startDate as string);
    const end_date = new Date(req.query.endDate as string);
    console.log('Start Date:', start_date, 'End Date:', end_date)
    data = await reservationService.checkAvailability(unit_id, start_date, end_date);
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

export default { getAllReservations, getReservationByUnitId, createNewReservation, 
                 checkAvailability, updateReservation,deleteReservation}