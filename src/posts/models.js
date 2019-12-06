import { Model } from 'sequelize'

class Post extends Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        title: DataTypes.STRING,
        description: DataTypes.STRING
      },
      {
        tableName: 'Posts',
        sequelize
      },
    )
  }
}

Post.associate = models => {
  Post.belongsTo(models.User)
}
 
export default Post