export default [
    {
      files: ["**/*.js"],
      languageOptions: {
        parserOptions: {
          ecmaVersion: "latest",
          sourceType: "module"
        }
      },
      rules: {
        semi: ["error", "always"],
        quotes: ["error", "double"],
        "no-unused-vars": "warn"
      }
    }
  ];