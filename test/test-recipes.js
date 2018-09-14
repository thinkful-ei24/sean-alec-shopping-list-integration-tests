
const chai = require('chai');
const chaiHttp = require('chai-http');

const {app, runServer, stopServer} = require('../server');
const expect = chai.expect;

chai.use(chaiHttp);

describe('Recipes', function() {

  before(function() {
    return runServer();
  });

  after(function() {
    return stopServer();
  });

  it("should list recipes on GET", function() {

  });

  it("should return a single item on GET with an id", function() {

  });
  
  it("should create recipe on POST", function() {

  });

  it("should update recipe on PUT", function() {

  });

  it("should remove a recipe on DELETE", function() {

  });
});