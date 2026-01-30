import { Router } from "express"
import {SchedulerController} from '../core/controllers/scheduler-controller.js'



export const SchedulerRouter = Router() 
const schedulerController = new SchedulerController()

SchedulerRouter.post('/create', (req, res) => schedulerController.create(req, res))
SchedulerRouter.put('/', (req, res) => schedulerController.edit(req, res))