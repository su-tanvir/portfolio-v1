module.exports = {
  extends: ["plugin:astro/recommended"],
  overrides: [
    // this object defs is for astro files
    {
      files: ["*.astro"],
      parser: "astro-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"],
      },
      rules: {
        "astro/no-conflict-set-directives": "error",
        "astro/no-unused-define-vars-in-style": "error",
      },
    },
  ],
};
