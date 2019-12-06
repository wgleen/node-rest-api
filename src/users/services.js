import User from './models'

class UsersService {
  static all () {
    return new Promise((resolve, reject) => {
      User.all()
        .then(data => resolve(data))
        .catch(error => reject(error))
    })
  }

  static create (values) {
    const {
      name,
      email,
      password
    } = values
  
    return new Promise((resolve, reject) => {
      User.create({
        name,
        email,
        password
      })
        .then(data => resolve(data)) 
        .catch(error => reject(error))
    })
  }

  static findById (id) {
    return new Promise((resolve, reject) => {
      User.findById(id)
        .then(data => resolve(data)) 
        .catch(error => reject(error))
    })
  }

  static update (id, values) {
    const {
      name,
      email
    } = values
  
    let _values = {}
  
    if (name) _values.name = name 
    if (email) _values.email = email
  
    return new Promise((resolve, reject) => {
      User.update(_values, { 
        where: { id },
        returning: true,
        plain: true
      })
        .then(data => resolve(data[1]))
        .catch(error => reject(error))
    })
  }

  static destroy (id) {
    return new Promise((resolve, reject) => {
      User.destroy({ where: { id } })
        .then(data => resolve(data)) 
        .catch(error => reject(error))
    })
  }
}

export default UsersService