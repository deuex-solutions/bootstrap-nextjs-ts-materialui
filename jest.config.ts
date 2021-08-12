module.exports = {
  // Working directory
  roots: ["<rootDir>/pages"],

  // Test files
  testMatch: ["<rootDir>/pages/**/*.test.{ts,tsx}"], // All test files in subdirectories under pages/

  // TypeScript
  preset: "ts-jest",

  // Test Environment
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
  clearMocks: true,
};
