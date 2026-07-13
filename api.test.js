// Mocha & Chai Testing

const chai = require("chai");
const chaiHttp = require("chai-http");

const app = require("../server");

const expect = chai.expect;

chai.use(chaiHttp);

describe("Task API", () => {

    // GET /tasks
    it("should return all tasks", (done) => {

        chai.request(app)
            .get("/tasks")
            .end((err, res) => {

                expect(res).to.have.status(200);
                expect(res.body).to.be.an("array");

                done();

            });

    });

    // GET /tasks/:id
    it("should return one task by ID", (done) => {

        chai.request(app)
            .get("/tasks/1")
            .end((err, res) => {

                expect(res).to.have.status(200);
                expect(res.body).to.be.an("object");
                expect(res.body.id).to.equal(1);

                done();

            });

    });

    // GET /tasks
    it("should return 404 for a missing task", (done) => {

        chai.request(app)
            .get("/tasks/999")
            .end((err, res) => {

                expect(res).to.have.status(404);

                done();

            });

    });

    // POST /tasks
    it("should create a new task", (done) => {

        chai.request(app)
            .post("/tasks")
            .send({
                title: "Write tests"
            })
            .end((err, res) => {

                expect(res).to.have.status(201);
                expect(res.body).to.be.an("object");
                expect(res.body.title).to.equal("Write tests");
                expect(res.body.completed).to.equal(false);

                done();

            });

    });

    // POST validation
    it("should reject a task without a title", (done) => {

        chai.request(app)
            .post("/tasks")
            .send({})
            .end((err, res) => {

                expect(res).to.have.status(400);

                done();

            });

    });

    // PUT /tasks
    it("should update an existing task", (done) => {

        chai.request(app)
            .put("/tasks/1")
            .send({
                title: "Updated Task",
                completed: true
            })
            .end((err, res) => {

                expect(res).to.have.status(200);
                expect(res.body.title).to.equal("Updated Task");
                expect(res.body.completed).to.equal(true);

                done();

            });

    });

    // DELETE /tasks
    it("should delete a task", (done) => {

        chai.request(app)
            .delete("/tasks/1")
            .end((err, res) => {

                expect(res).to.have.status(200);
                expect(res.body.message).to.equal("Task deleted successfully!");

                done();

            });

    });

});
