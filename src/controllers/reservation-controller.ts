import reservationService from "../services/reservation-service";
import { Request, Response } from "express";

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
     const { unit_id, start_date, end_date, user_id} = req.body
     data = await reservationService.createNewReservation(unit_id, start_date, end_date, user_id);
     res.send(data);
}

const checkAvailability = async (req: Request, res: Response) => {
    const unit_id = parseInt(req.params.unit_id);
    const start_date = new Date ()
    const end_date = new Date ()
    data = await reservationService.checkAvailability(unit_id, start_date, end_date)
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