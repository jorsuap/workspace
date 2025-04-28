const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");
const share = mf.share;

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  path.join(__dirname, '../../tsconfig.json'),
  [/* mapped paths to share */]);

module.exports = {
  output: {
    uniqueName: "host",
    publicPath: "auto"
  },
  optimization: {
    runtimeChunk: false
  },
  resolve: {
    alias: {
      ...sharedMappings.getAliases(),
    }
  },
  experiments: {
    outputModule: true
  },
  plugins: [
    new ModuleFederationPlugin({
        library: { type: "module" },

        shared: share({
          "@angular/core": { singleton: true, strictVersion: true, requiredVersion: '>=14.2.0 <=18.2.8' },
          "@angular/common": { singleton: true, strictVersion: true, requiredVersion: '>=14.2.0 <=18.2.8' },
          "@angular/common/http": { singleton: true, strictVersion: true, requiredVersion: '>=14.2.0 <=18.2.8' },
          "@angular/router": { singleton: true, strictVersion: true, requiredVersion: '>=14.2.0 <=18.2.8' },

          ...sharedMappings.getDescriptors()
        })
    }),
    sharedMappings.getPlugin()
  ],
};
