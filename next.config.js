const path = require('path')

module.exports = {
    sassOptions: {
        includePaths: [path.join(__dirname, './*')],
    },
    env: {
        GITHUB_TOKEN: process.env.GITHUB_TOKEN,
    }
}