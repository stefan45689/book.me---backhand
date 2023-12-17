import reviewController from "../controllers/review-controller";
import express from 'express';

const reviewRouter = express.Router();

reviewRouter.route('/')
                       .get(reviewController.getAllReviews) 
                       .post(reviewController.addNewReview)

reviewRouter.route('/id')
                        .put(reviewController.updateReview)
                        .delete(reviewController.deleteReview)

export default reviewRouter