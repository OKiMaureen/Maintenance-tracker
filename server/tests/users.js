import chaiHttp from 'chai-http';
import chai from 'chai';
import app from '../app';
import users from './seededData';

const { expect } = chai;
chai.use(chaiHttp);
const signupUrl = '/api/v1/auth/signup';
const signinUrl = '/api/v1/auth/login';

describe('Test default route', () => {
  it('Should return 200 for the default route', (done) => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        expect(res.status).to.equal(200);
        done();
      });
  });
  it('Should return 404 for routes not specified', (done) => {
    chai.request(app)
      .get('/another/undefined/route')
      .end((err, res) => {
        expect(res.status).to.equal(404);
        done();
      });
  });
  it('Undefined Routes Should Return 404', (done) => {
    chai.request(app)
      .post('/another/undefined/route')
      .send({
        random: 'random',
      })
      .end((err, res) => {
        expect(res).to.have.status(404);
        done();
      });
  });
});

describe('POST /api/v1/auth/signup', () => {
  it('It Should create users with right signup details', (done) => {
    chai.request(app)
      .post(`${signupUrl}`)
      .send(users[0])
      .end((err, res) => {
        expect(res).to.have.status(201);
        expect(res.body).to.be.an('object');
        expect(res.body.message).to.equal('user created successfully');
        expect(res.body.status).to.equal('success');
        expect(res.body).to.have.property('data');
        done();
      });
  });
  it('should not register a new user with an already existing email', (done) => {
    chai.request(app)
      .post(`${signupUrl}`)
      .send(users[0])
      .end((err, res) => {
        expect(res).to.have.status(409);
        expect(res.body).to.be.an('object');
        expect(res.body.message).to.equal('email already exists');
        expect(res.body.status).to.equal('error');
        done();
      });
  });
  it('should not register user with a wrong email format', (done) => {
    chai.request(app)
      .post(`${signupUrl}`)
      .send({
        name: 'maureen',
        email: 'maureen.com',
        password: 'maureen123',
      })
      .end((err, res) => {
        expect(res).to.have.status(406);
        expect(res.body).to.be.an('object');
        expect(res.body.error.email)
          .to.include('email address is invalid');
        done();
      });
  });
  it('should take required character format error', (done) => {
    chai.request(app)
      .post(`${signupUrl}`)
      .send({
        name: 'hhhjjjjjjjjjjjjjjjjjjjjjjjjjjjjjhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh',
        email: 'maureen@gmailcom',
        password: 'maureen123',
      })
      .end((err, res) => {
        expect(res).to.have.status(406);
        done();
      });
  });
  it('should not register user with an empty name field ', (done) => {
    chai.request(app)
      .post(`${signupUrl}`)
      .send({
        name: 'hhhjjjjjjjjjjjjjjjjjjjjjjjjjjjjjhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh',
        email: 'maureen@gmailcom',
        password: 'maureen123',
      })
      .end((err, res) => {
        expect(res).to.have.status(406);
        done();
      });
  });
  it('should not register user with an empty name field ', (done) => {
    chai.request(app)
      .post(`${signupUrl}`)
      .send({
        name: '',
        email: 'eloho@mymail.com',
        password: 'eloho123',
      })
      .end((err, res) => {
        expect(res).to.have.status(406);
        expect(res.body).to.be.an('object');
        expect(res.body.error.name)
          .to.include('name is required');
        done();
      });
  });
  it('should not register name with less than 3 characters', (done) => {
    chai.request(app)
      .post(`${signupUrl}`)
      .send({
        name: 'ma',
        email: 'eloho@mymail.com',
        password: 'eloho123',
      })
      .end((err, res) => {
        expect(res).to.have.status(406);
        expect(res.body).to.be.an('object');
        expect(res.body.message)
          .to.include('name can only be between 3 to 15 characters');
        done();
      });
  });
  it('should not register with more than 15 characters', (done) => {
    chai.request(app)
      .post(`${signupUrl}`)
      .send({
        name: 'maureeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeen',
        email: 'eloho@mymail.com',
        password: 'eloho123',
      })
      .end((err, res) => {
        expect(res).to.have.status(406);
        expect(res.body).to.be.an('object');
        expect(res.body.message)
          .to.include('name can only be between 3 to 15 characters');
        done();
      });
  });
  it('should not register with wierd characters', (done) => {
    chai.request(app)
      .post(`${signupUrl}`)
      .send({
        name: '@$@%#!^!',
        email: 'eloho@mymail.com',
        password: 'eloho123',
      })
      .end((err, res) => {
        expect(res).to.have.status(406);
        expect(res.body).to.be.an('object');
        expect(res.body.message)
          .to.include('only alphabets and numbers are allowed.');
        done();
      });
  });
  it('should not register with less than 6 password characters', (done) => {
    chai.request(app)
      .post(`${signupUrl}`)
      .send({
        name: 'maureen',
        email: 'eloho@mymail.com',
        password: '123',
      })
      .end((err, res) => {
        expect(res).to.have.status(406);
        expect(res.body).to.be.an('object');
        expect(res.body.message)
          .to.include('password must be between 6 to 50 characters');
        done();
      });
  });
  it('should not register user with an empty email field ', (done) => {
    chai.request(app)
      .post(`${signupUrl}`)
      .send({
        username: 'maureen',
        email: '',
        password: 'maureen123',
      })
      .end((err, res) => {
        expect(res).to.have.status(406);
        expect(res.body).to.be.an('object');
        expect(res.body.error.email)
          .to.include('email is required');
        done();
      });
  });
  it('should not register user with an empty password field ', (done) => {
    chai.request(app)
      .post(`${signupUrl}`)
      .send({
        username: 'maureen',
        email: 'maureen@email.com',
        password: '',
      })
      .end((err, res) => {
        expect(res).to.have.status(406);
        expect(res.body).to.be.an('object');
        expect(res.body.error.password)
          .to.include('password is required');
        done();
      });
  });
  it('should not register user with an empty string field ', (done) => {
    chai.request(app)
      .post(`${signupUrl}`)
      .send({
        name: 'maureen',
        email: 'maureen@email.com',
        password: '   ',
      })
      .end((err, res) => {
        expect(res).to.have.status(406);
        expect(res.body).to.be.an('object');
        expect(res.body.error.password)
          .to.include('password is required');
        done();
      });
  });
});
describe('POST /api/v1/auth/login', () => {
  it('should login a user with the correct details', (done) => {
    chai.request(app)
      .post(`${signinUrl}`)
      .send(users[1])
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('object');
        expect(res.body).to.have.property('data');
        expect(res.body.message).to.equal('user logged in successfully');
        expect(res.body.status).to.be.equal('success');
        done();
      });
  });
  it('should not login user without password', (done) => {
    chai.request(app)
      .post(`${signinUrl}`)
      .send({
        email: 'maureen@mymail.com',
        password: '',
      })
      .end((err, res) => {
        expect(res).to.have.status(406);
        expect(res.body).to.be.an('object');
        expect(res.body.error.password).to.equal('password is required');
        done();
      });
  });
  it('should not login user with empty password string', (done) => {
    chai.request(app)
      .post(`${signinUrl}`)
      .send({
        email: 'maureen@mymail.com',
        password: '    ',
      })
      .end((err, res) => {
        expect(res).to.have.status(406);
        expect(res.body).to.be.an('object');
        expect(res.body.error.password).to.equal('password is required');
        done();
      });
  });
  it('should not login user without email address', (done) => {
    chai.request(app)
      .post(`${signinUrl}`)
      .send({
        email: '',
        password: 'maureen123',
      })
      .end((err, res) => {
        expect(res).to.have.status(406);
        expect(res.body).to.be.an('object');
        expect(res.body.error.email).to.equal('email is required');
        done();
      });
  });
  it('should not login user with empty email address string', (done) => {
    chai.request(app)
      .post(`${signinUrl}`)
      .send({
        email: '    ',
        password: 'maureen123',
      })
      .end((err, res) => {
        expect(res).to.have.status(406);
        expect(res.body).to.be.an('object');
        expect(res.body.error.email).to.equal('please provide a valid email address');
        done();
      });
  });
  it('should not login user with invalid email address', (done) => {
    chai.request(app)
      .post(`${signinUrl}`)
      .send({
        email: 'me.com',
        password: 'maureen123',
      })
      .end((err, res) => {
        expect(res).to.have.status(406);
        expect(res.body).to.be.an('object');
        expect(res.body.error.email).to.equal('please provide a valid email address');
        done();
      });
  });
  it('should not sign in a user with an incorrect password', (done) => {
    chai.request(app)
      .post(`${signinUrl}`)
      .send({
        email: 'maureen@gmail.com',
        password: 'wrongpassword',
      })
      .end((err, res) => {
        expect(res).to.have.status(401);
        expect(res.body).to.be.an('object');
        expect(res.body.message)
          .to.equal('please try again, you entered a wrong password');
        done();
      });
  });
  it('should not login user with an incorrect email address', (done) => {
    chai.request(app)
      .post(`${signinUrl}`)
      .send({
        email: 'wrong@mymail.com',
        password: 'maureen123',
      })
      .end((err, res) => {
        expect(res).to.have.status(404);
        expect(res.body).to.be.an('object');
        expect(res.body.message)
          .to.equal('user does not exist');
        done();
      });
  });
});
