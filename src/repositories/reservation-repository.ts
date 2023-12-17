import { values } from "lodash";
import dbConnection from "../dbConnection";
import { resolveSoa } from "dns";
import { error } from "console";

const getAllReservations = async () => {
    try {
        const result = await dbConnection.query(`select * from Reservations`)
        return result;
    }
    catch {
        return null;
    }
}

const getReservationByUnitId =async (id: number) => {
    try {
        const result = await dbConnection.query(`select * from Reservations where id = ?`, [id])
        return result
    }
    catch {
        return null;
    }
}

const checkAvailability =async (unit_id: number, start_date: Date, end_date: Date) => {
    try {
        const [result] = await dbConnection.query(`select count (*) from Reservations where unit_id = ?
                                              and not (end_date <= ? or start_date >= ?)`,
                                              [unit_id, start_date, end_date]);
        return result[0].count === 0;
    }
    catch {
        return null;
    }
}

const createNewReservation =async (unit_id: number,start_date: Date, end_date: Date, user_id: number) => {
    try {
        const isAvailable = await checkAvailability(unit_id, start_date, end_date) 
         if (!isAvailable)  {
            throw new Error ('Unfortunately this property is not available for the selected dates')
         }  
        else {
            const result = await dbConnection.query(`Insert into Reservations (user_id, unit_id, start_date, end_date)
                                                    values (?, ?, ?, ? , now(), now())`,
                                                    [user_id, unit_id, start_date, end_date ])
         return result                                           
        }
    }
    catch (e: any){
        return { success: false, msg: e.message}
    }
}

const updateReservation =async (id: number, reservation: any) => {
    try {
        const result = await dbConnection.query(`update Reservations
                                                 set user_id = ?, unit_id = ?, start_date = ?, end_date = ?
                                                 where id = ? `, [reservation.user_id, reservation.unit_id, reservation.start_date, reservation.end_date])
        return result;
    }
    catch (e: any) {
        return { success: false, msg: e.message}
    }
}

const deleteReservation =async (id: number) => {
    try { 
        const result = await dbConnection.query(`delete from Reservations where id = ?`, [id])
        return result;
    }
    catch (e: any) {
        return { success: false, msg: e.message};
    }
}

export default { getAllReservations, getReservationByUnitId, createNewReservation, 
                 checkAvailability, updateReservation, deleteReservation}