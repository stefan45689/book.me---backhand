import express from "express";
import unitController from "../controllers/unit-controller";

const unitRouter = express.Router();

unitRouter.route('/')
                     .get(unitController.getAllUnits)
                     .post(unitController.addUnit)

unitRouter.route('/:id')
                      .get(unitController.getUnitByID)
                      .put(unitController.updateUnit)
                      .delete(unitController.deleteUnit)

unitRouter.route('/search')
                      .get(unitController.searchUnits)

export default unitRouter;