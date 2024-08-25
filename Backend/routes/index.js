import { Router } from "express";
import AuthRoutes from "../routes/auth.route.js"
import TaskRoutes from "../routes/task.route.js"
import TicketRoutes from "../routes/Ticket.route.js"
import ProfileRoutes from "../routes/Ticket.route.js"
import BookRoutes from "../routes/Ticket.route.js"
import TicketBookRoutes from "../routes/Ticket.route.js"
const router = Router();
router.use("/auth", AuthRoutes);
router.use("/task", TaskRoutes);
router.use("/ticket",TicketRoutes)
router.use("/pro",ProfileRoutes)
router.use("/book",BookRoutes)
router.use("/ticktbook",TicketBookRoutes)
export default router;