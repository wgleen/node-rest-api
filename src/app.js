import express from 'express'
import helmet from 'helmet'
import bodyParser from 'body-parser'
import logger from './lib/logger'
import users from './users/routes'
import posts from './posts/routes'
import sessions from './sessions/routes'
import { notFound } from './middlewares'
import { sequelize } from './database'

const app = express()

app.use(helmet())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(logger)

app.use('/users', users)
app.use('/sessions', sessions)
app.use('/posts', posts)
app.use(notFound)

export const bootstrap = (options = {}, callback) => {
  sequelize.sync().then(() => {
    app.listen(options.port, () => console.log(`app listening on port ${options.port}!`))

    callback && callback(app)
  })
}

export default app
