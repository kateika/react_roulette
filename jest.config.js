module.exports = {
  verbose: true,
  moduleDirectories: ["node_modules", "src"],
  testPathIgnorePatterns: [ "<rootDir>[/\\\\](build|docs|node_modules|scripts)[/\\\\]" ],
  moduleNameMapper: { "^.+\\.css$": "identity-obj-proxy" },
  transform: { "^.+\\.js$": "babel-jest" },
  transformIgnorePatterns: [ "[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$" ],
  setupFiles:["<rootDir>/mocks/fetchMock.js"]
};
