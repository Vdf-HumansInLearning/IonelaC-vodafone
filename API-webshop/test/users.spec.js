let chai = require('chai');
let chaiHttp = require("chai-http");
let assert = chai.assert;
let expect = chai.expect;
let should = chai.should();
let users = require("../server");
chai.use(chaiHttp);

describe("Get user", function() {

    it("dummy test", function() {
        expect(true).to.be.true;
    })

    it("get user name", () => {
        let user = {
            "id": 1,
            "name": "Leanne Graham",
            "username": "Bret",
            "email": "Sincere@april.biz"
        }
        let name = "Leanne Graham";
        expect(user.name).to.equal(name);
    });

    it("get user name by id", () => {
        chai
            .request(users)
            .get("/users/1")
            .end((err, res) => {
                expect(res.body.name).to.be.equal(name);
                expect(res.should.have.status(200));
            });

    });
    let name = "Leanne Graham";
})