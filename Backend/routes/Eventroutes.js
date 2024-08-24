import { Router } from "express";
import { CreateEvent, deletedEvent, updateEvents } from "../controleer/auth.controller"

const router=Router()

router.post("/events",CreateEvent)
router.put('/events/:id',updateEvents);
router.delete('/events/:id',deletedEvent);
export default router