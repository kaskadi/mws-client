const spawnSync = require('child_process').spawnSync

require('./utils/set-env.js')

spawnSync('nyc', ['--reporter=lcov', 'mocha'], { stdio: 'inherit' })
