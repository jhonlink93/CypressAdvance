const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    pageLoadTimeout: 6000,
    retries: { 'runMode': 2, 'openMode': 0 },
    baseUrl: "https://pokedexpokemon.netlify.app/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
