import { Router } from "express";
import { AddTask, DeleteTask, GetAllTasks, UpdateTask, YourAddedTasks } from "../controller/task.controller.js";
import { checkIsUserValid } from "../middlewares/all.middleware.js";

const router = Router();
router.post("/addtask",checkIsUserValid,AddTask);
router.get("/getalltask",checkIsUserValid,GetAllTasks);
router.put('/task/update/:id',checkIsUserValid, UpdateTask);
router.delete('/task/delete/:id',checkIsUserValid, DeleteTask);
router.post("/your-added-tasks",checkIsUserValid, YourAddedTasks);

export default router;