import { Router } from 'express'
import PostsResource from './resources'
import { jwtAuthentication } from '../lib/authentication'

const routes = Router()

routes.get('/', jwtAuthentication, PostsResource.index)
routes.post('/', jwtAuthentication, PostsResource.create)

export default routes 