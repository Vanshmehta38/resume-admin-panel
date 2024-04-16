const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents() {
      // implement node event listeners here
    },
    env: {
      PORT: 4000
    },
    excludeSpecPattern: ['cypress/e2e/login-success.cy.js'],
    viewportHeight: 1000,
    viewportWidth: 1550
  }
})
