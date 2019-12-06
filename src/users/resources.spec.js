describe('Resources', () => {
  describe('Resource GET /', () => {
    it('should return a status 200', done => {
      request
        .get('/')
          .then(res => {
            expect(res.status).to.be.eql(200)
            done()
          })
          .catch(err => done(err))
    })

    it('should return a message', done => {
      request
        .get('/')
          .then(res => {
            expect(res.body.message).to.be.eql('Hello World')
            done()
          })
          .catch(err => done(err))
    })
  })
})