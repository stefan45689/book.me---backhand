import { values } from "lodash";
import dbConnection from "../dbConnection";
import { json } from "stream/consumers";


const getAllReservations = async () => {
    try {
        const result = await dbConnection.query(`select * from Reservations`)
        return result;
    }
    catch {
        return null;
    }
}

const getReservationByUserId =async (id: number) => {
    try {
        const result = await dbConnection.query(`select r.*, u.user_id
                                                 from reservations r
                                                 JOIN units u ON r.unit_id = u.id
                                                 where u.user_id = ?`, [id])
        console.log('Reservations:', result)
        //const plainResult = JSON.parse(JSON.stringify(result))
        return result
    }
    catch {
        return null;
    }
}

const checkAvailability =async (unit_id: number, start_date: Date, end_date: Date) => {
    try {
        const startDate = start_date.toISOString().slice(0, 19).replace('T', ' ');
        const endDate = end_date.toISOString().slice(0, 19).replace('T', ' ');

        const result = await dbConnection.query(`select exists (
                                                   select 1 from reservations 
                                                   where unit_id = ? 
                                                   and not (end_date < ? OR start_date > ?)
                                                   ) as available`,
                                                   [unit_id, startDate, endDate]);
        console.log(result)
        if (result[0].available == 0 && result[0].available != undefined) 
           return { success: true, available: true}
        else
           return { success: true, available: false}
    }
    catch (e: any) {
        console.log("Error checking availability", e);
        return { success: false, msg: e.message}
    }
}

const createNewReservation =async (reservation: any) => {
    try {
        const isAvailable = await checkAvailability 
         if (!isAvailable)  {
            throw new Error ('Unfortunately this property is not available for the selected dates')
         }  
        else {

            const result = await dbConnection.query(`Insert into Reservations (user_id, user_username, unit_id, start_date, end_date, totalAmount, created, updated)
                                                    values (?, ?, ?, ?, ?, ?, now (), now ())`,
                                                    [reservation.user_id, reservation.user_username, reservation.unit_id,
                                                     reservation.start_date, reservation.end_date, reservation.totalAmount])                                            
         return { success: true, data: result }                                       
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

export default { getAllReservations, getReservationByUserId, createNewReservation, 
                 checkAvailability, updateReservation, deleteReservation}