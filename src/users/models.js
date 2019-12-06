import { Model } from 'sequelize'
import {
  hashSync,
  genSaltSync
} from 'bcrypt'

class User extends Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING
      },
      {
        tableName: 'Users',
        sequelize,
        hooks: {
          beforeCreate: user => {
            const hash = hashSync(user.password, genSaltSync(8), null)

            user.password = hash
          }
        }
      },
    )
  }
}

User.associate = models => {
  User.hasMany(models.Post)
}
 
export default User