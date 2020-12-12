var request = require("supertest");
var app = require("../index.js");
describe("/", function () {
  it("respond with hello world", function (done) {
    request(app).get("/").expect("hello world", done);
  });
});
