import { Router } from "express"
import { CreateEvent, getCurrentUser, Login, Register } from "../controleer/auth.controller.js"

const router=Router()

router.post("/register",Register)
router.post("/login",Login)
router.get('/get-current-user', getCurrentUser)
router.post('/send-message',sendMessage);

export default router;
