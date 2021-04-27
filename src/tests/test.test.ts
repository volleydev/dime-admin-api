process.env.NODE_ENV = "test";
process.env.PORT = "8081";

import chai, { expect } from "chai";
import chaiHttp from "chai-http";

import { Availability } from "../schema";

import { postMenu } from "../routes/menu";

import app from "../index";

import { getIdToken, TEST_USER_ID } from "./setup";

chai.use(chaiHttp);

let token;

describe("Testing 'menu' endpoints:", function () {
  beforeEach(() =>
    getIdToken().then((t) => {
      token = t;
    })
  );

  it("Post menu", () => {
    try {
    } catch (error) {
      console.log(error);
    }
  });
});

interface MenuInput {
  name: string;
  description?: string;
  availability?: Availability[];
}

const mockMenuInput: MenuInput = {
  name: "test menu",
  description: "this is a test menu for testing purposes only.",
  availability: [
    {
      days: [1, 2, 3, 4, 5],
      time: ["8:00", "20:00"],
    },
  ],
};
