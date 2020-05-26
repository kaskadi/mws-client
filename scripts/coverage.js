const spawnSync = require('child_process').spawnSync

require('./utils/set-env.js')

spawnSync('nyc', ['--reporter=html', 'mocha'], { stdio: 'inherit' })
spawnSync('xdg-open', ['./coverage/index.html'], { stdio: 'inherit' })
