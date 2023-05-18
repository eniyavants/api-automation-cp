const { request, expect } = require("@playwright/test");
import { _Response } from "./response";
require("dotenv").config();

export const GetPositiveResponse = async (element) => {
  //declaring context
  const context = await request.newContext({
    baseURL: process.env.URL,
  });
  const response = await context.get(`${element}`);

  // Assertion
  expect(response.status()).toBe(_Response.getPositive);
  expect(response.body()).toBeTruthy();
  const res = await response.json();
  return res;
};

export const PostPositiveResponse = async (element, listItem) => {
  //declaring context
  const context = await request.newContext({
    baseURL: process.env.URL,
  });
  const response = await context.post(`${element}`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    data: {
      Description: listItem,
    },
  });

  // Assertion
  expect(response.status()).toBe(_Response.postPositive);
  return response;
};

export const PostNegativeResponse = async (element) => {
  //declaring context
  const context = await request.newContext({
    baseURL: process.env.URL,
  });
  const response = await context.post(`${element}`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    data: {
      test: "test content",
    },
  });

  // Assertion
  expect(response.status()).toBe(_Response.postNegative);
  const res = await response.json();
  return res;
};

export const PostConflictResponse = async (element, listItem) => {
     //declaring context
  const context = await request.newContext({
    baseURL: process.env.URL,
  });
  const response = await context.post(`${element}`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    data: {
      Description: listItem,
    },
  });

  //Assertion
  expect(response.status()).toBe(_Response.postConflict);
  const res = await response.text();
  return res;
};

export const GenerateRandomText = async (element) => {
    const fruitsAndVegetables = [
        "apple", "banana", "carrot", "dragonfruit", "eggplant", "fig", "grapefruit",
        "honeydew", "jackfruit", "kiwi", "lemon", "mango", "nectarine", "orange",
        "pineapple", "quince", "raspberry", "strawberry", "tomato", "ugli fruit",
        "watermelon", "zucchini"
      ];
    
      const randomIndex = Math.floor(Math.random() * fruitsAndVegetables.length);
      const randomItem = fruitsAndVegetables[randomIndex];
      const randomNumber = Math.floor(Math.random() * 1000);

      return element + randomItem + " " + randomNumber;
};