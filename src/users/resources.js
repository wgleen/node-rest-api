import UsersService from './services'

class UsersResource {
  static index (req, res) {
    UsersService.all()
      .then(data => res.json({ data })) 
      .catch(errors => res.json({ errors }))
  }

  static create (req, res) {
    UsersService.create(req.body)
      .then(data => res.json({ data })) 
      .catch(errors => res.json({ errors }))
  }

  static show (req, res) {
    UsersService.findById(req.params.id)
      .then(data => res.json({ data })) 
      .catch(errors => res.json({ errors }))
  }

  static update (req, res) {
    UsersService.update(req.params.id, req.body)
      .then(data => res.json({ data })) 
      .catch(errors => res.json({ errors }))
  }

  static destroy (req, res) {
    UsersService.destroy(req.params.id)
      .then(data => res.json({ data })) 
      .catch(errors => res.json({ errors }))
  }
}

export default UsersResource