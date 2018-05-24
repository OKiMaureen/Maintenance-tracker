import chaiHttp from 'chai-http';
import chai from 'chai';
import app from '../app';

const { expect } = chai;
chai.use(chaiHttp);

const signupUrl = '/api/v1/auth/signup';

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
      .send({ random: 'random' })
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
      .send({
        name: 'efe',
        email: 'efe@gmail.com',
        password: 'efe123',
      })
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
      .send({
        name: 'maureen',
        email: 'maureen@gmail.com',
        password: 'maureen123',
      })
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
          .to.include('Email address is invalid');
        done();
      });
  });
  it('should not register user with an empty name field ', (done) => {
    chai.request(app)
      .post(`${signupUrl}`)
      .send({
        name: '',
        email: 'maureen@mymail.com',
        password: 'maureen123',
      })
      .end((err, res) => {
        expect(res).to.have.status(406);
        expect(res.body).to.be.an('object');
        expect(res.body.error.name)
          .to.include('Name is required');
        done();
      });
  });
  it('should not register user with an empty string name field ', (done) => {
    chai.request(app)
      .post(`${signupUrl}`)
      .send({
        name: ' ',
        email: 'maureen@mymail.com',
        password: 'maureen123',
      })
      .end((err, res) => {
        expect(res).to.have.status(406);
        expect(res.body).to.be.an('object');
        expect(res.body.error.name)
          .to.include('Name is required');
        done();
      });
  });
  it('should not register name with less than 3 characters', (done) => {
    chai.request(app)
      .post(`${signupUrl}`)
      .send({
        name: 'ma',
        email: 'maureen@mymail.com',
        password: 'maureen123',
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
        email: 'maureen@mymail.com',
        password: 'maureen123',
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
        email: 'maureen@mymail.com',
        password: 'maureen123',
      })
      .end((err, res) => {
        expect(res).to.have.status(406);
        expect(res.body).to.be.an('object');
        expect(res.body.message)
          .to.include('Only alphabets and numbers are allowed.');
        done();
      });
  });
  it('should not register with less than 6 password characters', (done) => {
    chai.request(app)
      .post(`${signupUrl}`)
      .send({
        name: 'maureen',
        email: 'maureen@mymail.com',
        password: '123',
      })
      .end((err, res) => {
        expect(res).to.have.status(406);
        expect(res.body).to.be.an('object');
        expect(res.body.message)
          .to.include('Password must be between 6 to 50 characters');
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
          .to.include('Email is required');
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
          .to.include('Password is required');
        done();
      });
  });
  it('should not register user with an empty string field ', (done) => {
    chai.request(app)
      .post(`${signupUrl}`)
      .send({
        username: 'maureen',
        email: 'maureen@email.com',
        password: '   ',
      })
      .end((err, res) => {
        expect(res).to.have.status(406);
        expect(res.body).to.be.an('object');
        expect(res.body.error.password)
          .to.include('Password is required');
        done();
      });
  });
});
