import chaiHttp from 'chai-http';
import chai from 'chai';
import app from '../app';

const { expect } = chai;
chai.use(chaiHttp);

let userToken;
const adminUrl = '/api/v1/requests';
const userSignin = '/api/v1/auth/login';
const seededAdmin = {
  email: 'mena@gmail.com',
  password: 'mena1234',
};

describe('ADMIN CONTROLLER', () => {
  before((done) => {
    chai.request(app)
      .post(`${userSignin}`)
      .send(seededAdmin)
      .end((err, res) => {
        userToken = res.body.data.token;
        done();
      });
  });
  describe('GET /api/v1/requests', () => {
    it('should allow authenticated admin to view all requests', (done) => {
      chai.request(app)
        .get(`${adminUrl}`)
        .set('token', userToken)
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.property('data');
          expect(res.body.message).to.equal('all request gotten successfully');
          expect(res.body.status).to.be.equal('success');
          done();
        });
    });
    it('should not allow users not authenticated to view all requests', (done) => {
      chai.request(app)
        .get(`${adminUrl}`)
        .end((err, res) => {
          expect(res).to.have.status(401);
          expect(res.body).to.be.an('object');
          expect(res.body.message).to.equal('user authentication invalid');
          expect(res.body.status).to.be.equal('fail');
          done();
        });
    });
  });
});
