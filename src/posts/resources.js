import PostsService from './services'

class PostsResource {
  static index (req, res) {
    PostsService.all()
      .then(data => res.json({ data })) 
      .catch(errors => res.json({ errors }))
  }

  static create (req, res) {
    PostsService.create({
      ...req.body,
      id: req.user.id
    })
      .then(data => res.json({ data })) 
      .catch(errors => res.json({ errors }))
  }
}

export default PostsResource