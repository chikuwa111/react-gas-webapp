const fs = require("fs");
const path = require("path");

class GasAssetWebpackPlugin {
  apply(compiler) {
    compiler.hooks.afterEmit.tap("GasAssetWebpackPlugin", (compilation) => {
      const {
        options: {
          output: { path: dir, filename },
        },
      } = compilation;

      if (/\.js\.html$/.test(filename)) {
        const filePath = path.resolve(dir, filename);
        fs.writeFileSync(
          filePath,
          `<script>\n${fs.readFileSync(filePath)}\n</script>`
        );
      }
    });
  }
}

module.exports = GasAssetWebpackPlugin;
