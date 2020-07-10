if (!process.env.GITHUB_ACTIONS) {
  const fs = require('fs')
  const path = require('path')
  const dotenv = require('dotenv')
  const confPath = path.join(__dirname, '..', '..', 'test', '.env')
  if (!fs.existsSync(confPath)) {
    console.log('No environment configuration file found in test, stopping process...')
    process.exit()
  }
  dotenv.config({ path: confPath })
} else {
  const missingEnvVars = ['MWS_KEY_ID', 'MWS_KEY_SECRET', 'AMZ_EU_SELLER_ID'].filter(envVar => !process.env[envVar])
  if (missingEnvVars.length > 0) {
    console.log(`Missing environment ${missingEnvVars.length > 1 ? 'variables' : 'variable'} ${missingEnvVars.join(', ')}, stopping process...`)
    process.exit()
  }
}
