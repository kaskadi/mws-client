// assuming that in the context of GitHub Actions the action is setup to properly bind environment variables to their corresponding secrets (we won't commit .env files!)
if (!JSON.parse(process.env.GITHUB_ACTIONS)) {
  const dotenv = require('dotenv')
  dotenv.config()
}
