import chaiHttp from 'chai-http';
import chai from 'chai';
import app from '../app'

const { expect } = chai;
chai.use(chaiHttp);
const requestURL = '/api/v1/users/request';

// test default route
describe('Test default route', () => {
  // Test for default route
  it('Should return 200 for the default route', (done) => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        expect(res.status).to.equal(200);
        done();
      });
  });
  
});
// Test Request Controller
describe('POST /api/v1/users/request', () => {

  it('should not add request with an empty title field', (done) => {
    chai.request(app)
      .post(`${requestURL}`)
      .send({
        title: '',
        department: 'Technical',
        equipment: 'Laptop',
        serialNumber: 'mt000002',
        description: 'laptop battery is faulty'
      })
      .end((err, res) => {
        expect(res).to.have.status(406);
        expect(res.body).to.be.an('object');
        expect(res.body.error.title)
          .to.include('title is required');
        done();
      });
  });
  it('should not add request with an empty department field', (done) => {
    chai.request(app)
      .post(`${requestURL}`)
      .send({
        title: 'Computer repair',
        department: ' ',
        equipment: 'Laptop',
        serialNumber: 'mt000002',
        description: 'laptop battery is faulty'
      })
      .end((err, res) => {
        expect(res).to.have.status(406);
        expect(res.body).to.be.an('object');
        expect(res.body.error.department)
          .to.include('department is required');
        done();
      });
  });
   it('should not add request with an empty equipment field', (done) => {
    chai.request(app)
      .post(`${requestURL}`)
      .send({
        title: 'Laptop repair',
        department: 'Technical ',
        equipment: '',
        serialNumber: 'mt000002',
        description: 'laptop battery is faulty'
      })
      .end((err, res) => {
        expect(res).to.have.status(406);
        expect(res.body).to.be.an('object');
        expect(res.body.error.equipment)
          .to.include('equipment is required');
        done();
      });
  });
    it('should not add request with an empty serialNumber field', (done) => {
    chai.request(app)
      .post(`${requestURL}`)
      .send({
        title: 'Laptop repair',
        department: 'Tecnical ',
        equipment: 'Laptop',
        serialNumber: '',
        description: 'laptop battery is faulty'
      })
      .end((err, res) => {
        expect(res).to.have.status(406);
        expect(res.body).to.be.an('object');
        expect(res.body.error.serialNumber)
          .to.include('serialNumber is required');
        done();
      });
  });
     it('should not add request with an empty description field', (done) => {
    chai.request(app)
      .post(`${requestURL}`)
      .send({
        title: 'Laptop repair',
        department: 'Tecnical ',
        equipment: 'Laptop',
        serialNumber: 'mt000002',
        description: ''
      })
      .end((err, res) => {
        expect(res).to.have.status(406);
        expect(res.body).to.be.an('object');
        expect(res.body.error.description)
          .to.include('description is required');
        done();
      });
  });
it('should not add a title with less than 5 characters', (done) => {
    chai.request(app)
      .post(`${requestURL}`)
      .send({
        title: 'Lap',
        department: 'Tecnical ',
        equipment: 'Laptop',
        serialNumber: 'mt000002',
        description: 'laptop battery is faulty'
      })
      .end((err, res) => {
         expect(res.status).to.equal(406);
          expect(res.body).to.be.an('object');
          expect(res.body.message)
            .to.include('Title must be between 5 and 20 characters');
          done();
        });
  });
  it('should not add a title with more than 20 characters', (done) => {
    chai.request(app)
      .post(`${requestURL}`)
      .send({
        title: 'Computer has really big problem',
        department: 'Tecnical ',
        equipment: 'Laptop',
        serialNumber: 'mt000002',
        description: 'laptop battery is faulty'
      })
      .end((err, res) => {
         expect(res.status).to.equal(406);
          expect(res.body).to.be.an('object');
          expect(res.body.message)
            .to.include('Title must be between 5 and 20 characters');
        done();
      });
  });
  it('should not add a serialNumber with less than  8 characters', (done) => {
    chai.request(app)
      .post(`${requestURL}`)
      .send({
        title: 'Laptop repair',
        department: 'Tecnical ',
        equipment: 'Laptop',
        serialNumber: 'mt00',
        description: 'laptop battery is faulty'
      })
      .end((err, res) => {
         expect(res.status).to.equal(406);
          expect(res.body).to.be.an('object');
          expect(res.body.message)
            .to.include('SerialNumber must be only 8 characters');
          done();
      });
  });
  it('should not add a SerialNumber with more than  8 characters', (done) => {
    chai.request(app)
      .post(`${requestURL}`)
      .send({
        title: 'Laptop repair',
        department: 'Tecnical ',
        equipment: 'Laptop',
        serialNumber: 'mt0000020000',
        description: 'laptop battery is faulty'
      })
      .end((err, res) => {
         expect(res.status).to.equal(406);
          expect(res.body).to.be.an('object');
          expect(res.body.message)
            .to.include('SerialNumber must be only 8 characters');
         done();
      });
  });
  it('should not add a description with less than  3 characters', (done) => {
    chai.request(app)
      .post(`${requestURL}`)
      .send({
        title: 'Laptop repair',
        department: 'Tecnical ',
        equipment: 'Laptop',
        serialNumber: 'mt000002',
        description: 'la'
      })
      .end((err, res) => {
         expect(res.status).to.equal(406);
          expect(res.body).to.be.an('object');
          expect(res.body.message)
            .to.include('Description must be between 3 and 50 characters');
         done();
      });
  });
  it('should not add a description with more than 50 characters', (done) => {
    chai.request(app)
      .post(`${requestURL}`)
      .send({
        title: 'Laptop repair',
        department: 'Tecnical ',
        equipment: 'Laptop',
        serialNumber: 'mt000002',
        description: 'laptop is so fautly, I really want you to repair it as soon as possible, no matter the cost'
      })
      .end((err, res) => {
         expect(res.status).to.equal(406);
          expect(res.body).to.be.an('object');
          expect(res.body.message)
            .to.include('Description must be between 3 and 50 characters');
         done();
      });
  });
  it('Should return 201 for a request successfully created', (done) => {
    chai.request(app)
      .post(`${requestURL}`)
      .send({
         title: 'Laptop repair',
        department: 'Tecnical ',
        equipment: 'Laptop',
        serialNumber: 'mt000002',
        description: 'laptop'
      })
      .end((err, res) => {
        expect(res.body).to.be.an('object');
        done();
      });
  });
});

