const fs = require('fs')
const path = require('path')

const PDPackages = fs.readdirSync(path.resolve(__dirname, 'packages/@pangoo-design'))

module.exports = {
  extends: [
    '@commitlint/config-conventional'
  ],
  rules: {
    'scope-enum': [
      2,
      'always',
      [
        'docs',
        'pangoo-design',
        'examples',
        ...PDPackages
      ].map(name => `$${name}`).concat('release')
    ],
    'subject-case': [0, 'never', ['sentence-case', 'start-case', 'pascal-case', 'upper-case']],
  }
}
