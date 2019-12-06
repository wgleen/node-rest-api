import passport from 'passport'
import { Strategy as JwtStrategy } from 'passport-jwt'
import { ExtractJwt } from 'passport-jwt'
import User from '../users/models'

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: 'SECRET_KEY'
}

const jwtStrategy = new JwtStrategy(options, (jwtPayload, done) =>
  User.findById(jwtPayload.id)
    .then(data => done(null, data)) 
    .catch(() => done(null, false))
) 

passport.use(jwtStrategy)

export const jwtAuthentication = passport.authenticate('jwt', { session: false })