import {Router} from "express" ; 


import {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask
} from "../controllers/tasks.controllers.js";

const router = Router (); //instance

//get all tasks
router.get('/', getAllTasks);

//get one task
router.get('/:id', getTaskById);

//create a task
router.post('/', createTask);

//update a task
router.put('/:id', updateTask);

//delete a task
router.delete('/:id', deleteTask);

export default router;


