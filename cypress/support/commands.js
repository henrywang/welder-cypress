// Find iframe with selector. Wait for element to exist inside the iframe
// return all body
Cypress.Commands.add('iframe', (selector, element) => {
  return cy.get(`iframe${selector || ''}`, { timeout: 10000 })
    .should(($iframe) => {
      expect($iframe.contents().find(element || 'body')).to.exist;
    }).then(($iframe) => {
      var w = cy.wrap($iframe.contents().find('body'));
      // optional - add a class to the body to let the iframe know it's running inside the cypress
      // replaces window.Cypress because window.Cypress does not work from inside the iframe
      w.invoke('addClass', 'cypress'); 
      return w;
    });
});

before(() => {
  cy.visit('/');

  cy.get('[id="login-user-input"]').type('root');
  cy.get('[id="login-password-input"]').type('foobar');
  cy.get('[id="login-button"]').click();
});

after(() => {
  cy.get('[id="content-user-name"]').click();
  cy.get('[id="go-logout"]').click();
});