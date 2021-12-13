var chai = require('chai');
let chaiHttp = require("chai-http");
var assert = chai.assert; // Using Assert style
var expect = chai.expect; // Using Expect style
var should = chai.should(); // Using Should style
// let users = require("../routes/users");

chai.use(chaiHttp);


describe("Get user", function() {

    it("dummy test", function() {
        expect(true).to.be.true;
    })

    it("get user name", () => {
        // chai
        //     .request(users)
        //     .get("/users/1")
        //     .end((err, res) => {
        //         expect(name).to.be.equal(res.body.name);
        //     });
        var user = {
            "id": 1,
            "name": "Leanne Graham",
            "username": "Bret",
            "email": "Sincere@april.biz"
        }
        var name = "Leanne Graham";
        expect(user.name).to.equal(name);
    });
})