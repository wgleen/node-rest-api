import { Router } from 'express'
import UsersResource from './resources'
import { jwtAuthentication } from '../lib/authentication'

const routes = Router()

routes.get('/', jwtAuthentication, UsersResource.index)
routes.post('/', UsersResource.create)
routes.get('/:id', jwtAuthentication, UsersResource.show)
routes.put('/:id', jwtAuthentication, UsersResource.update)
routes.delete('/:id', jwtAuthentication, UsersResource.destroy)

export default routes
