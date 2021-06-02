/// <reference types="cypress" />
import '@testing-library/cypress/add-commands';
import './commands';

beforeEach(() => {
  // cy.intercept({
  //   ignore: (xhr: XMLHttpRequest) => {
  //     // to ignore webpack sockjs
  //     const match = 'sockjs-node';
  //     return xhr.url.indexOf(match) > -1;
  //   },
  // });
});
