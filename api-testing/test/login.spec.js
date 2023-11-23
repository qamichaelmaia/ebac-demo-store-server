const req = require("supertest");
const API_URL = process.env.API_URL;

describe("User login", () => {
    it("should get access token", () => {
        req("http:locahost/3000/api")
            .post("/login")
            .send({
                username: "admin",
                password: "admin",
            })
            .set("Accept", "application/json")
            .then((response) => {
                expect(response.statusCode).toEqual(201);
                expect(response.body.accessToken).not.toBe(undefined);
            });
    });
});
