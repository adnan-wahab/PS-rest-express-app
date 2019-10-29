let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should()
let expect = chai.expect
require('chai/register-should');

chai.use(chaiHttp);

app = require('./index')
const example = {
    "name": "abraham lincoln",
    "street":"307 lime drive",
    "city": "houston",
    "state": "TX",
    "country": "USA"
};

describe('Testing the address endpoints:', () => {
  it('It should create a address', (done) => {

    chai.request(app)
      .post('/address')
      .set('Accept', 'application/json')
      .send(example)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body).to.include(example);
        done();
      });
  });

  it('It should not create a book with incomplete parameters', (done) => {
    const address = {
      price: '$9.99',
      description: 'This is the awesome book'
    };
    chai.request(app)
      .post('/Address')
      .set('Accept', 'application/json')
      .send(address)
      .end((err, res) => {
        expect(res.status).to.equal(400);
        done();
      });
  });

  it('It should get all books', (done) => {
    chai.request(app)
      .get('/address')
      .set('Accept', 'application/json')
      .end((err, res) => {
        expect(res.status).to.equal(200);
        res.body[0].should.have.property('name');
        res.body[0].should.have.property('city');
        res.body[0].should.have.property('state');
        res.body[0].should.have.property('country');
        done();
      });
  });

  it('It should get a particular address', (done) => {
    const bookId = 1;
    app.Address.create(example)
    app.Address.findByPk(1).then( (result) => console.log(result.dataValues) )

    chai.request(app)
      .get(`/address/${bookId}`)
      .set('Accept', 'application/json')
      .end((err, res) => {
        expect(res.status).to.equal(200);
        res.body.should.have.property('name');
        res.body.should.have.property('street');
        res.body.should.have.property('city');
        res.body.should.have.property('state');
        res.body.should.have.property('country');
        done();
      });
  });

  it('It should not get a particular address with invalid id', (done) => {
    const id = 8888;
    chai.request(app)
      .get(`/address/${id}`)
      .set('Accept', 'application/json')
      .end((err, res) => {
        expect(res.status).to.equal(404);
        res.body.should.have.property('message')
                            .eql(`Cannot find Address with that ID`);
        done();
      });
  });

  it('It should update a book', (done) => {
    const bookId = 1;
    const example = {
        "name": "abraham lincoln",
        "street":"307 lime drive",
        "city": "houston",
        "state": "TX",
        "country": "USA"
    };
    chai.request(app)
      .put(`/address/${bookId}`)
      .set('Accept', 'application/json')
      .send(example)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.id).equal(example.id);
        expect(res.body.title).equal(example.title);
        expect(res.body.price).equal(example.price);
        expect(res.body.description).equal(example.description);
        done();
      });
  });

  it('It should not update a book with invalid id', (done) => {
    const bookId = '9999';

    chai.request(app)
      .put(`/address/${bookId}`)
      .set('Accept', 'application/json')
      .send(example)
      .end((err, res) => {
        expect(res.status).to.equal(404);
        res.body.should.have.property('message')
                            .eql("Cannot find Address with that ID");
        done();
      });
  });


  it('It should delete a book', (done) => {
    const bookId = 1;
    chai.request(app)
      .delete(`/api/v1/books/${bookId}`)
      .set('Accept', 'application/json')
      .end((err, res) => {
        expect(res.body.data).to.include({});
        done();
      });
  });


});
