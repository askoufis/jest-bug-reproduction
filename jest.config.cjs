/* @type {import("jest").Config} */
const config = {
  preset: "./jest-preset.js",
  projects: ["<rootDir>", "<rootDir>/scripts"],
  testPathIgnorePatterns: ["scripts"],
};

module.exports = config;
