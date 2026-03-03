const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-multi-reporters',
  reporterOptions:{
    reporterEnabled: 'cypress-mochawesome-reporter, mocha-junit-reporter',
    mochaJunitReporterReporterOptions: {
      mochaFile: 'cypress/reports/junit/results-[hash].xml',
  },
  cypressMochawesomeReporterReporterOptions: {
    reportDir: 'cypress/reports/html',
    charts: true,
    reportPageTitle: 'Relatório de Testes',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  }
},
  chromeWebSecurity: false,
  videosFolder: 'cypress/videos',
  video: true,
  screenshotsFolder: 'cypress/screenshots',

  e2e: {
    baseUrl: 'https://www.saucedemo.com',
    env:{
      user: 'Cypress'
    },
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on)
      return config
    },
  },
});
