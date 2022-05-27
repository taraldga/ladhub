export default {
  testEnvironment: "jest-environment-jsdom",
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  moduleDirectories: [
    'node_modules',
    'src/utils',
    __dirname
  ]
}