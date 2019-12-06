import User from '../users/models'
import jwt from 'jsonwebtoken'
import { compareSync } from 'bcrypt'

class SessionsService {
  static create (values) {
    return new Promise((resolve, reject) => {
      User.findOne({ 
        email: values.email
      })
        .then(data => {
          const logged = compareSync(values.password, data.password)
    
          if (logged) {
            const token = jwt.sign({ id: data.id }, 'SECRET_KEY', {
              expiresIn: 60 * 60 * 24
            })
      
            resolve(token)
          } else reject()
        })
        .catch(error => reject(error))
    })
  }
}

export default SessionsService