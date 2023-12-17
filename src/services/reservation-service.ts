import reservationRepository from "../repositories/reservation-repository";
import dbConnection from "../dbConnection";

const getAllReservations = async () => {
    const data = await reservationRepository.getAllReservations(); 
    const result: any = []; 

    data.forEach((reservation: any) => {
        result.push({
            user_id: reservation.user_id, 
            unit_id: reservation.unit_id,
            start_date: reservation.start_date,
            end_date: reservation.end_date,
            updated: reservation.updated, 
            created: reservation.created
        });
    })

    return result; 
}

const getReservationByUnitId = async (id:number) => {
    const data = await reservationRepository.getReservationByUnitId(id); 
      const  result: any = []
            data.forEach((reservation: any) => {
              result.push ({
                user_id: reservation.user_id, 
                unit_id: reservation.unit_id, 
                start_date_id: reservation.start_date_id,
                end_date_id: reservation.end_date_id, 
                updated: reservation.updated, 
                created: reservation.created 
        }) 
    return result;
    })

    return null; 
}

const checkAvailability =async (unit_id: number, start_date: Date, end_date: Date) => {
    const result = await reservationRepository.checkAvailability(unit_id, start_date, end_date)
    return result;
}

const createNewReservation = async (unit_id: number, start_date: Date, end_date: Date, user_id: number) => {
    const result = await reservationRepository.createNewReservation(unit_id, start_date, end_date, user_id);
    
        /*
        const result = ({
            user_id: data[0].user_id,
            unit_id: data[0].unit_id,
            start_date: data[0].start_date,
            end_date: data[0].end_date,
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

export default { getAllReservations, getReservationByUnitId, createNewReservation, 
                 checkAvailability,updateReservation, deleteReservation}