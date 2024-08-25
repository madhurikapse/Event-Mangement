import { Router } from "express";
import {  bookTickets, getUserBookings, getUserProfile, TicketBook} from "../controller/task.controller.js";

const router = Router();
router.post("/ticketBook",TicketBook)
router.get('/profile', getUserProfile);
router.get('/bookings',getUserBookings);
router.post('/book-tickets',bookTickets);

export default router;