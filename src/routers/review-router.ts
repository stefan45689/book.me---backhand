import reviewController from "../controllers/review-controller";
import express from 'express';

const reviewRouter = express.Router();

reviewRouter.route('/') 
                       .post(reviewController.addNewReview)

reviewRouter.route('/get-by-unit/:id')
                        .get(reviewController.getCommentsByUnitId)

export default reviewRouter