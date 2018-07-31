require("dotenv").config();
const path = require("path");
const Dotenv = require("dotenv-webpack");
const withTypeScript = require("@zeit/next-typescript");

module.exports = withTypeScript({
    webpack(config) {
        config.plugins.push(new Dotenv({
            path: path.join(__dirname, ".env"),
            systemvars: true,
        }));
        return config;
    }
});
