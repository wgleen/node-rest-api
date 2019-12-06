import Post from './models'

class PostsService {
  static all () {
    return new Promise((resolve, reject) => {
      Post.all()
        .then(data => resolve(data))
        .catch(error => reject(error))
    })
  }

  static create (values) {
    const {
      id,
      title,
      description
    } = values

    return new Promise((resolve, reject) => {
      Post.create({
        UserId: id,
        title,
        description     
      })
        .then(data => resolve(data))
        .catch(error => reject(error))
    })
  }
}

export default PostsService