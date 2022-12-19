import { container } from "webpack";
const deps = require("./package.json").dependencies;

module.exports = {
  output: {
    publicPath: "http://localhost:4201/",
    uniqueName: "musicapp",
    scriptType: "text/javascript",
  },
  optimization: {
    runtimeChunk: false,
  },
  devServer: {
    port: 4201,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    hot: true,
  },
  plugins: [
    new container.ModuleFederationPlugin({
      name: "angular-shell",
      filename: "remoteEntry.js",
      remotes: {
        profile_user: `profile_user@http://localhost:3001/remoteEntry.js`,
        settings_user: `settings_user@http://localhost:3002/remoteEntry.js`,
      },
      shared: {
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: deps["react-dom"],
        },
      },
    }),
  ],
};
