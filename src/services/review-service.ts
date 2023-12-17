import reviewRepository from "../repositories/review-repository";

const getAllReviews = async () => {
    const data = await reviewRepository.getAllReviews(); 
    const result: any = []; 

    data.forEach((review: any) => {
        result.push({
            user_id: review.user_id, 
            unit_id: review.unit_id,
            rating: review.rating,
            comment: review.comment,
            updated: review.updated, 
            created: review.created
        });
    })

    return result; 
}

const addNewReview = async (review: any) => {
    const result = await reviewRepository.addNewReview(review); 
    return result; 
}

const updateReview = async (id: number, review: any) => {
    const result = await reviewRepository.updateReview(id, review); 
    return result; 
}

const deleteReview = async (id: number) => {
    const data = await reviewRepository.deleteReview(id);
     if ( data.id == id) {
        return true;
    }; 

    return false;
     
}

export default { getAllReviews, addNewReview, updateReview, deleteReview}