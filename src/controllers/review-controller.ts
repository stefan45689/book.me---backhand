import reviewService from "../services/review-service";
import { Request, Response } from "express";

let data: any = [];

const getAllReviews = async (req: Request, res: Response) => {
    data = await reviewService.getAllReviews()
    res.send(data);
}

const addNewReview = async (req: Request, res: Response) => {
     data = await reviewService.addNewReview(req.body);
     res.send(data);
}

const updateReview = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    data = await reviewService.updateReview(req.body, id);
}

const deleteReview = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    data = await reviewService.deleteReview(id);
    res.send(data);
}

export default { getAllReviews, addNewReview, updateReview,deleteReview}