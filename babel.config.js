const camelToSnake = (string) => {
  return string
    .replace(/[\w]([A-Z])/g, function(m) {
      return m[0] + '-' + m[1];
    })
    .toLowerCase();
};

module.exports = {
  presets: ["@babel/preset-env", "@babel/preset-react"],
  plugins: [
    "@babel/plugin-transform-runtime",
    [
      'transform-imports',
      {
      '@data-driven-forms/react-form-renderer': {
          transform: (importName) => `@data-driven-forms/react-form-renderer/${camelToSnake(importName)}`,
          preventFullImport: true
        }
      },
      '@data-driven-forms/react-form-renderer'
  ]]
}
