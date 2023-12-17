import dbConnection from "../dbConnection";

const getAllReviews = async () => {
    try {
        const result = await dbConnection.query(`select * from Reviews`)
        return result;
    }
    catch {
        return null;
    }
}

const addNewReview =async (review: any) => {
    try {
        const result = await dbConnection.query(`insert into Reviews (user_id, unit_id, rating, comment, created, updated) 
                                                 values (?, ?, ?, ?, now(), now())`, 
                                                 [review.user_id, review.unit_id, review.rating, review.comment, review.created, review.updated]);
        return result;
    }
    catch (e: any) {
        return { success: false, msg: e.message}
    }
}

const updateReview =async (id: number, review: any) => {
    try {
        const result = await dbConnection.query(`update Reviews
                                                 set user_id = ?, unit_id = ?, rating = ?, comment = ?
                                                 where id = ? `, [review.user_id, review.unit_id, review.rating, review.comment])
        return result;
    }
    catch (e: any) {
        return { success: false, msg: e.message}
    }
}

const deleteReview =async (id: number) => {
    try { 
        const result = await dbConnection.query(`delete from Reviews where id = ?`, [id])
        return result;
    }
    catch (e: any) {
        return { success: false, msg: e.message};
    }
}

export default { getAllReviews, addNewReview, updateReview, deleteReview}