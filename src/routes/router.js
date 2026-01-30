import { Router } from 'express'
import { SchedulerRouter } from './scheduler.router.js'

const routes = Router()

routes.use('/scheduler', SchedulerRouter)

export default routes