import { Router } from "express";

const router=Router()
router.post('/send-message', messageController.sendMessage);
export default router;