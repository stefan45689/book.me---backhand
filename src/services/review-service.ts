import { CommandFailedEvent } from "typeorm";
import reviewRepo from "../repositories/review-repo";

const getCommentsByUnitId = async (id:number) => {
    const data = await reviewRepo.getCommentsByUnitId(id); 
    if (data && data.length > 0) {

        return data.map((row: any) => ({
            comment: row.comment,
            username: row.username
        }))
    }
    else {
       return [];
    } 
}
const addNewReview = async (review: any) => {
    const result = await reviewRepo.addNewReview(review); 
    return result; 
}

/*const updateReview = async (id: number, review: any) => {
    const result = await reviewRepository.updateReview(id, review); 
    return result; 
}

const deleteReview = async (id: number) => {
    const data = await reviewRepository.deleteReview(id);
     if ( data.id == id) {
        return true;
    }; 

    return false;
     
}*/

export default { addNewReview, getCommentsByUnitId, /*updateReview, deleteReview*/}