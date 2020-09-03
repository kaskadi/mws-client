if (!process.env.GITHUB_ACTIONS) {
  const fs = require('fs')
  const path = require('path')
  const dotenv = require('dotenv')
  const confPath = path.join(__dirname, '..', '.env')
  if (!fs.existsSync(confPath)) {
    console.log('No environment configuration file found in test, stopping process...')
    process.exit()
  }
  dotenv.config({ path: confPath })
}
