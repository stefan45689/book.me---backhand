import dbConnection from "../dbConnection";

const getCommentsByUnitId = async (id: number) => {
    try {
        const result = await dbConnection.query(`select DISTINCT r.comment, u.username from Reviews r
                                                 JOIN users u ON r.user_id = u.id
                                                 where r.unit_id = ? 
                                                 order by rand() 
                                                 limit 5`, [id])
        console.log( "Comments:" , result)                                         
        return result
    }
    catch (e: any){
        return { success: false, msg: e.message}
    }
}

const addNewReview = async (review: any) => {
    try {
        const result = await dbConnection.query(`insert into Reviews (user_id, unit_id, reservation_id, rating, comment,created, updated) 
                                                 values (?, ?, ?, ?, ?, now(), now()) `,
                                                [review.user_id, review.unit_id, review.reservation_id, review.rating, review.comment] )
          return result                                      
    }
    catch (e: any) {
        return { success: false, msg: e.message}
    }
}


export default { getCommentsByUnitId, addNewReview }