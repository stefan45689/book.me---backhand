import reservationRepository from "../repositories/reservation-repository";
import dbConnection from "../dbConnection";

const getAllReservations = async () => {
    const data = await reservationRepository.getAllReservations(); 
    const result: any = []; 

    data.forEach((reservation: any) => {
        result.push({
            user_id: reservation.user_id, 
            user_username: reservation.user_username,
            unit_id: reservation.unit_id,
            start_date: reservation.start_date,
            end_date: reservation.end_date,
            totalAmount: reservation.totalAmount,
            updated: reservation.updated, 
            created: reservation.created
        });
    })

    return result; 
}

const getReservationByUserId = async (id:number) => {
    const data = await reservationRepository.getReservationByUserId(id); 
    let result: any = []
    if (data && data.length > 0) {

          data.forEach((reservation: any) => {
          result.push ({ 
            user_id: reservation.user_id, 
            user_username: reservation.user_username,
            unit_id: reservation.unit_id,
            start_date: reservation.start_date,
            end_date: reservation.end_date,
            totalAmount: reservation.totalAmount,
            updated: reservation.updated, 
            created: reservation.created  
        })
    })
    return result;
    }

    return null; 
}

const checkAvailability =async (unit_id: number, start_date: Date, end_date: Date) => {
    const result = await reservationRepository.checkAvailability(unit_id, start_date, end_date)
    return result;
}

const createNewReservation = async (reservation: any) => {
    const result = await reservationRepository.createNewReservation(reservation);
    
        /*
        const result = ({
            user_id: data[0].user_id,
            user_username: data[0].user_username,
            unit_id: data[0].unit_id,
            start_date: data[0].start_date,
            end_date: data[0].end_date,
            totalAmount: data[0].totalAmount,
            created: date[0].created,
            updated: data[0].updated
        })

        */
        return result;
}    

const updateReservation = async (id: number, reservation: any) => {
    const result = await reservationRepository.updateReservation(id, reservation); 
    return result; 
}

const deleteReservation = async (id: number) => {
    const data = await reservationRepository.deleteReservation(id);
     if ( data.id == id) {
        return true;
    }; 

    return false;
     
}


export default { getAllReservations, getReservationByUserId, createNewReservation, 
                 checkAvailability,updateReservation, deleteReservation}

