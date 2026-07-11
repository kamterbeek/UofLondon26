// chai testing

const chai = require("chai");
const chaiHttp = require("chai-http");

const app = require("../server");

const expect = chai.expect;

chai.use(chaiHttp);

describe("Task API", () => {

    it("should return all tasks", (done) => {

        chai.request(app)
            .get("/tasks")
            .end((err, res) => {

                expect(res).to.have.status(200);
                expect(res.body).to.be.an("array");

                done();

            });

    });

});
