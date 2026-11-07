module.exports = {
  transform: {
    '^.+\\.[t|j]sx?$': ['babel-jest', {
      presets: [
        ['@babel/preset-env', { targets: { node: 'current' } }],
        ['@babel/preset-react', { runtime: 'automatic' }]
      ],
      configFile: false,
      babelrc: false
    }]
  },
  testEnvironment: 'jsdom'
};