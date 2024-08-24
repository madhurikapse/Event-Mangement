import { Router } from "express";
import AuthRoutes from "./auth.routes.js";
import eventRoutes from "./Eventroutes.js"
import messageRoutes from "./messageRoutes.js"
const router = Router();

router.use("/auth", AuthRoutes);
router.use("/event",eventRoutes)
router.use("/message",messageRoutes)

export default router;