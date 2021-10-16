// This file is not going through babel transformation.
// So, we write it in vanilla JS
// (But you could use ES2015 features supported by your Node.js version)

const debug = process.env.NODE_ENV !== "production";
const path = require("path");

module.exports = {
  assetPrefix: !debug ? "/" : "",
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};
