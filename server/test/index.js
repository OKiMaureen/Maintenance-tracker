import chaiHttp from 'chai-http';
import chai from 'chai';
import app from '../app';

const { expect } = chai;
chai.use(chaiHttp);
const signupUrl = '/api/v1/auth/signup';
const signinUrl = '/api/v1/auth/login';
const requestUrl = '/api/v1/users/requests';
let userToken;
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
        name: 'maureen',
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
describe('POST /api/v1/auth/login', () => {
  it('should login a user with the correct details', (done) => {
    chai.request(app)
      .post(`${signinUrl}`)
      .send({
        email: 'efe@gmail.com',
        password: 'efe123',
      })
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('object');
        expect(res.body).to.have.property('data');
        expect(res.body.message).to.equal('user logged in successfully');
        expect(res.body.status).to.be.equal('success');
        userToken = res.body.data.token;
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
        expect(res.body.error.password).to.equal('Password is required');
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
        expect(res.body.error.password).to.equal('Password is required');
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
        expect(res.body.error.email).to.equal('Email is required');
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
        expect(res.body.error.email).to.equal('Please provide a valid email address');
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
        expect(res.body.error.email).to.equal('Please provide a valid email address');
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
describe('/api/v1/users/requests', () => {
  it('should not allow users not authenticated to view all requests', (done) => {
    chai.request(app)
      .get(`${requestUrl}`)
      .end((err, res) => {
        expect(res).to.have.status(401);
        expect(res.body).to.be.an('object');
        done();
      });
  });
});
describe('/api/v1/users/requests/1', () => {
  it(
    'should not allow users not authenticated to view a single requests',
    (done) => {
      chai.request(app)
        .get(`${requestUrl}`)
        .end((err, res) => {
          expect(res).to.have.status(401);
          expect(res.body).to.be.an('object');
          done();
        });
    },
  );
});

describe('POST /api/v1/users/requests', () => {
  it('should not add request with an empty title field', (done) => {
    chai.request(app)
      .post(`${requestUrl}`)
      .set('token', userToken)
      .send({
        title: ' ',
        department: 'Technical',
        equipment: 'computer',
        serialNumber: 'MT000001',
        description: 'faulty battery',
        token: userToken,
      })
      .end((err, res) => {
        expect(res.status).to.equal(406);
        expect(res.body).to.be.an('object');
        expect(res.body.error.title)
          .to.include('title is required');
        done();
      });
  });
  it('should not add request title with less than 5 characters', (done) => {
    chai.request(app)
      .post(`${requestUrl}`)
      .set('token', userToken)
      .send({
        title: 'bad',
        department: 'Technical',
        equipment: 'computer',
        serialNumber: 'MT000001',
        description: 'faulty battery',
        token: userToken,
      })
      .end((err, res) => {
        expect(res.status).to.equal(406);
        expect(res.body).to.be.an('object');
        expect(res.body.message)
          .to.include('Title must be between 5 and 20 characters');
        done();
      });
  });
  it('should not add request with an empty department', (done) => {
    chai.request(app)
      .post(`${requestUrl}`)
      .set('token', userToken)
      .send({
        title: 'computer repair',
        department: ' ',
        equipment: 'computer',
        serialNumber: 'MT000001',
        description: 'faulty battery',
        token: userToken,
      })
      .end((err, res) => {
        expect(res.status).to.equal(406);
        expect(res.body).to.be.an('object');
        expect(res.body.error.department)
          .to.include('department is required');
        done();
      });
  });
  it('should not add request with an empty equipment field', (done) => {
    chai.request(app)
      .post(`${requestUrl}`)
      .set('token', userToken)
      .send({
        title: 'computer repair',
        department: 'Technical ',
        equipment: ' ',
        serialNumber: 'MT000001',
        description: 'faulty computer ',
        token: userToken,
      })
      .end((err, res) => {
        expect(res.status).to.equal(406);
        expect(res.body).to.be.an('object');
        expect(res.body.error.equipment)
          .to.include('equipment is required');
        done();
      });
  });
  it('should not add request with an empty serialNumber field', (done) => {
    chai.request(app)
      .post(`${requestUrl}`)
      .set('token', userToken)
      .send({
        title: 'computer repair',
        department: 'Technical ',
        equipment: 'computer ',
        serialNumber: ' ',
        description: 'faulty computer ',
        token: userToken,
      })
      .end((err, res) => {
        expect(res.status).to.equal(406);
        expect(res.body).to.be.an('object');
        expect(res.body.error.serialNumber)
          .to.include('serialNumber is required');
        done();
      });
  });
  it('should not add request with an empty description field', (done) => {
    chai.request(app)
      .post(`${requestUrl}`)
      .set('token', userToken)
      .send({
        title: 'computer repair',
        department: 'Technical ',
        equipment: 'computer ',
        serialNumber: 'MT000001',
        description: ' ',
        token: userToken,
      })
      .end((err, res) => {
        expect(res.status).to.equal(406);
        expect(res.body).to.be.an('object');
        expect(res.body.error.description)
          .to.include('description is required');
        done();
      });
  });
  it('should not add serialNumber with less than 8 characters', (done) => {
    chai.request(app)
      .post(`${requestUrl}`)
      .set('token', userToken)
      .send({
        title: 'computer repair',
        department: 'Technical ',
        equipment: 'computer ',
        serialNumber: 'MT000',
        description: 'faulty computer',
        token: userToken,
      })
      .end((err, res) => {
        expect(res.status).to.equal(406);
        expect(res.body).to.be.an('object');
        expect(res.body.message)
          .to.include('SerialNumber must be only 8 characters');
        done();
      });
  });
  it('should not add desription with less than 3 characters', (done) => {
    chai.request(app)
      .post(`${requestUrl}`)
      .set('token', userToken)
      .send({
        title: 'computer repair',
        department: 'Technical ',
        equipment: 'computer ',
        serialNumber: 'MT000001',
        description: 'ba',
        token: userToken,
      })
      .end((err, res) => {
        expect(res.status).to.equal(406);
        expect(res.body).to.be.an('object');
        expect(res.body.message)
          .to.include('Description must be between 3 and 50 characters');
        done();
      });
  });
  it('should not allow  non auth users to add requests', (done) => {
    chai.request(app)
      .post(`${requestUrl}`)
      .send({
        email: 'maureen@gmail.com',
        password: 'maureen123',
      })
      .end((err, res) => {
        expect(res.status).to.equal(401);
        expect(res.body).to.be.an('object');
        expect(res.body.message).to.equal('user authentication invalid');
        expect(res.body.status).to.be.equal('fail');
        done();
      });
  });
});
