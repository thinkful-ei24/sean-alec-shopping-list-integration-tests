
const chai = require('chai');
const chaiHttp = require('chai-http');

const {app, runServer, closeServer} = require('../server');
const expect = chai.expect;

chai.use(chaiHttp);

describe('Recipes', function() {

  before(function() {
    return runServer();
  });

  after(function() {
    return closeServer();
  });

  it("should list recipes on GET", function() {
    return chai.request(app)
      .get('/recipes')
      .then(function(res) {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('array');
        expect(res.body).length.to.be.greaterThan(1);
      });
  });

  // it("should return a single item on GET with an id", function() {
  //   return chai.request(app).get('/recipes/1')
  //     .then(res => {
  //       expect(res).to.have.status(200);
  //       expect(res.body).to.be.an('object');
  //       expect(res.body).to.have.members(['id', 'name', 'ingredients']);
  //     });
  // });
  
  it("should create recipe on POST", function() {
    const newItem = {
      name: "coffee",
      ingredients: [
        "water", "coffee beans"
      ]
    };
    return chai
      .request(app)
      .post("/recipes")
      .send(newItem)
      .then(function(res) {
        expect(res).to.have.status(201);
        expect(res).to.be.json;
        expect(res.body).to.be.a("object");
        expect(res.body).to.include.keys("id", "name", "ingredients");
        expect(res.body.id).to.not.equal(null);
        // response should be deep equal to `newItem` from above if we assign
        // `id` to it from `res.body.id`
        expect(res.body).to.deep.equal(
          Object.assign(newItem, { id: res.body.id })
        );
      });
  });

  it("should update recipe on PUT", function() {

  });

  it("should remove a recipe on DELETE", function() {

  });
});