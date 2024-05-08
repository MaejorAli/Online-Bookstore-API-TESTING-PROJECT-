import { use, expect } from 'chai';
import chaiHttp from 'chai-http';
import { faker } from '@faker-js/faker';
const chai = use(chaiHttp);

const randomName = faker.person.fullName();
const randomEmail = faker.internet.email();
const userName = faker.internet.userName()
const password = faker.internet.password()

describe('Integration Tests', () => {
    describe('POST /users/register', () => {
      it('should register a new user', (done) => {
        chai.request('http://localhost:3000')
          .post('/users/register')
          .send({ username: userName, email: randomEmail, password: password })
          .end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(201);
            expect(res.body).to.have.property('accessToken');
            done();
          });
      });
    });

    describe('POST /users/register', () => {
      it('should return an error if required fields are missing', (done) => {
        chai.request('http://localhost:3000')
          .post('/users/register')
          .send({ password: password }) 
          .end((err, res) => {
            expect(res).to.have.status(400); 
            done();
          });
      });

    });
  
    describe('POST /users/login', () => {
      it('should log in an existing user', (done) => {
        chai.request('http://localhost:3000')
          .post('/users/login')
          .send({ email: 'djabjo@example.com', password: 'example_user' })
          .end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            expect(res.body).to.have.property('accessToken');
            done();
          });
      });
    });
    describe('POST /users/login', () => {
      it('should return an error if user credentials are incorrect', (done) => {
        chai.request('http://localhost:3000')
          .post('/users/login')
          .send({ email: 'invalid@example.com', password: 'invalid_password' })
          .end((err, res) => {
            expect(res).to.have.status(400); 
            done();
          });
      });
    });
  

    describe('GET /books?search=query', () => {
      it('should return search results for books', (done) => {
        chai.request('http://localhost:3000')
          .get('/books?search=example')
          .end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            done();
          });
      });
    });

    describe('POST /users/:userId/cart', () => {
      it('should add an item to the user\'s cart', (done) => {
        chai.request('http://localhost:3000')
          .post('/users/1/cart')
          .send({ bookId: 1, quantity: 1 })
          .end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(201);
            done();
          });
      });
  
    describe('POST /users/:userId/checkout', () => {
      it('should complete the checkout process for a user', (done) => {
        chai.request('http://localhost:3000')
          .post('/users/1/checkout')
          .send({ books: [1,2], totalPrice: "23.98", createdAt : "2024-04-22T08:00:00Z"})
          .end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(201);
            done();
          });
      });
  });
});
});
