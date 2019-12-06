import SessionsService from './services'

class SessionsResource {
  static create (req, res) {
    SessionsService.create(req.body)
      .then(token => {
        res
          .status(200)
          .json({ token })
      })
      .catch(errors => 
        res
          .status(400)
          .json({ errors })  
      )      
  }
}

export default SessionsResource