module.exports = {
  globals: {
    'ts-jest': {
      isolatedModules: true
    }
  },

  moduleDirectories: ['node_modules', 'src'],
  preset: 'ts-jest',
  setupFilesAfterEnv: ['@testing-library/react/cleanup-after-each'],
  transform: {
    '^.+\\.[t|j]sx?$': 'ts-jest'
  },
  transformIgnorePatterns: [
    '[/\\\\]node_modules[/\\\\](?!(@amcharts)\\/).+\\.js$'
  ],
  moduleNameMapper: {
    '@bugsnag/js': '@bugsnag/browser',
    // '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$':
    //   'identity-obj-proxy',
      '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      'tests/__mocks__/fileMock.js'
  },
  verbose: true
};
