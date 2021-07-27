import { MoocBackendApp } from "../../../../../../src/apps/mooc/backend/MoocBackendApp";
import request from "supertest";
import { AfterAll, BeforeAll, Given, Then } from "@cucumber/cucumber";
import assert from "assert";

let application: MoocBackendApp;
let _request: request.Test;
let _response: request.Response;

Given("I send a GET request to {string}", (route: string) => {
  _request = request(application.httpServer).get(route);
});

Then("the response status code should be {int}", async (status: number) => {
  _response = await _request.expect(status);
});

Then("the response should be empty", () => {
  assert.deepStrictEqual(_response.body, {});
});

BeforeAll(async () => {
  application = new MoocBackendApp();
  await application.start();
});

AfterAll(async () => {
  await application.stop();
});
