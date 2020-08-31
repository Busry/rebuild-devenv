import { expect } from "chai";
import fs from "fs";
import { JSDOM } from "jsdom";
import { error } from "console";

describe("Our first test", () => {
  it("should pass", () => {
    expect(true).to.equal(true);
  });
});

describe("index.html", () => {
  it("should have h1 that says Users", (done) => {
    const option = {};
    JSDOM.fromFile("./src/index.html", option)
      .then((dom) => {
        dom.serialize();
        const h1 = dom.window.document.getElementsByTagName("h1")[0];
        expect(h1.innerHTML).to.equal("Users");
        done();
        window.close();
      })
      .catch((error) => error);
  });
});
