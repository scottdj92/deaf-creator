const withTypeScript = require("@zeit/next-typescript");
const Dotenv = require('dotenv-webpack');

module.exports = withTypeScript({plugins: [
    new Dotenv()
]});
