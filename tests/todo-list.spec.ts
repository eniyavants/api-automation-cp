import { expect, test } from "@playwright/test";
import {
  GetPositiveResponse,
  PostPositiveResponse,
  PostNegativeResponse,
  PostConflictResponse,
  GenerateRandomText,
} from "../utils/utils";
import { apiPaths } from "../utils/constants";

var randomText;

/**
 * Test data setup that runs before all the test in this suite
 * Output - random text is generated and it will be used in subsequent test
 */
test.beforeAll(async () => {
  console.log("Setting up Test data");
  randomText = await GenerateRandomText("Buy ");
});

/**
 * Test to add new todo item into the list
 * Endpoint - /api/todoItems
 * Http Method - Post
 */
test("Add new Todo item into the list", async () => {
  const result = await PostPositiveResponse(apiPaths.TODO_ITEMS, randomText);
  //Assertion
  expect(result.json()).toBeTruthy();
});

/**
 * Test to validate error message when payload in incorrect
 * Endpoint - /api/todoItems
 * Http Method - Post
 */
test("Error message is displayed when payload is wrong", async () => {
  const result = await PostNegativeResponse(apiPaths.TODO_ITEMS);

  //Assertion
  expect(result.title).toContain("One or more validation errors occurred.");
  expect(result.errors.Description).toContain(
    "Description field can not be empty"
  );
});

/**
 * Test to validate duplicate todo items cannot be added into the list
 * Endpoint - /api/todoItems
 * Http Method - Post
 */
test("Adding duplicate item into the Todo list", async () => {
  const result = await PostConflictResponse(apiPaths.TODO_ITEMS, randomText);

  //Assertion
  expect(result).toContain("A todo item with description already exists");
});

/**
 * Test to get list of todo items
 * Endpoint - /api/todoItems
 * Http Method - Get
 */
test("Get list of Todo Items avaliable", async () => {
  const result = await GetPositiveResponse(apiPaths.TODO_ITEMS);
});
