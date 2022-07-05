/// <reference types="cypress" />

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

import i18n from "@cypress-test-tiny/i18n";

cy.$t =
  /**
   * @param {Array<unknown>} args
   * @returns {string}
   */
  (...args) => i18n.global.t(...args);

Cypress.Commands.add(
  "$changeLocale",
  /**
   *
   * @param {"tr" | "en"} locale
   * @returns {void}
   */
  (locale) => {
    i18n.global.locale.value = locale;
  }
);
