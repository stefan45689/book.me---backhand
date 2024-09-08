import express from 'express'
import reservationController from '../controllers/reservation-controller'

const reservationRouter = express.Router();

reservationRouter.route('/')
                        .get(reservationController.getAllReservations)
                       // .post(reservationController.createNewReservation)

reservationRouter.route('/:id')
                        .put(reservationController.updateReservation)
                        .delete(reservationController.deleteReservation)

reservationRouter.route('/get-by-unit/:id')
                        .get(reservationController.getReservationByUserId)

reservationRouter.route('/create-new')
                        .post(reservationController.createNewReservation)

reservationRouter.route('/check-availability')
                        .get(reservationController.checkAvailability)

export default reservationRouter;