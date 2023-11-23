const req = require("supertest");
const { getAccessToken } = require("../utils/request");
const API_URL = process.env.API_URL;

describe("Users Resource", () => {
    let token;

    beforeAll(async () => {
        token = await getAccessToken("admin", "admin");
    });

    it("should list users", async () => {
        if (!token) {
            console.error("Token não disponível.");
            return;
        }

        console.log(token);

        const response = await req(API_URL)
            .get("/users")
            .set("Accept", "application/json")
            .set("Authorization", `Bearer ${token}`);

        expect(response.statusCode).toEqual(200);
        expect(response.body).toBeInstanceOf(Array);
    });
});
