import Sequelize from 'sequelize'
import User from '../users/models'
import Post from '../posts/models'
import {
  isFunction
} from 'lodash'

const sequelize = new Sequelize(
  'node_rest_api_development', 
  'node_rest_api_user', 
  'qwerty', 
  {
    host: 'localhost',
    dialect: 'postgres',
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    },
    operatorsAliases: false
  }
)

const models = {
  User: User.init(sequelize, Sequelize),
  Post: Post.init(sequelize, Sequelize)
}

Object.values(models)
  .filter(model => isFunction(model.associate))
  .forEach(model => model.associate(models))

export { sequelize }

export default models