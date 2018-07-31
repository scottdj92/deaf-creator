const withTypeScript = require("@zeit/next-typescript");
const Dotenv = require('dotenv-webpack');

module.exports = withTypeScript({
    webpack(config) {
        if (process.env.NODE_ENV !== "production") {
            config.plugins.push(new Dotenv({
                path: "./.env"
            }));
        }
        return config;
    }
});
