import { Router } from 'express'
import SessionsResource from './resources'

const routes = Router()

routes.post('/', SessionsResource.create)

export default routes
