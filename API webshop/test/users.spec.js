var chai = require('chai');
var assert = chai.assert;
var expect = chai.expect;
var should = chai.should();
let users = require("../server");



describe("Get user", function() {

    it("dummy test", function() {
        expect(true).to.be.true;
    })

    it("get user name", () => {
        var user = {
            "id": 1,
            "name": "Leanne Graham",
            "username": "Bret",
            "email": "Sincere@april.biz"
        }
        var name = "Leanne Graham";
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
    var name = "Leanne Graham";
})
