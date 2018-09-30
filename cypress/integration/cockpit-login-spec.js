describe('Logging In - HTML Web Form', () => {
  it('logging in to welder application', () =>{
    cy.iframe('[name="cockpit1:localhost/welder"]', 'body').as('iframe');
    cy.get('@iframe')
      .find('[data-target="#cmpsr-modal-crt-blueprint"]')
      .click();

    cy.get('@iframe')
      .find('#textInput-modal-markup')
      .type('automation');
    cy.get('@iframe')
      .find('#textInput2-modal-markup')
      .type('automation test');
    cy.get('@iframe')
      .find('.btn-primary')
      .click();

    cy.get('@iframe')
      .find('.cmpsr-list-pf__compacted .list-pf-item');

    cy.get('@iframe')
      .find('[id="cmpsr-blueprint-input-filter"]')
      .type('httpd{enter}');
    cy.get('@iframe')
      .find('.toolbar-pf-results ul li span span')
      .contains('Name: httpd');
    cy.get('@iframe')
      .find('.list-pf-content.list-pf-content-flex .list-pf-title')
      .contains('httpd')
      .parentsUntil('.list-pf-container', '.list-pf-content.list-pf-content-flex')
      .find('.list-pf-actions .btn-link')
      .click();

    cy.get('@iframe')
      .find('[class="btn btn-primary"]')
      .click();
    
    cy.get('@iframe')
      .find('[id="cmpsr-modal-pending-changes"] [class="btn btn-primary"]')
      .click();

    cy.get('@iframe')
      .find('#cmpsr-toast-0 .pficon-ok');
    cy.get('@iframe')
      .find('#cmpsr-toast-0 .close')
      .click();

    cy.get('@iframe')
      .find('a[href="#/blueprints"]')
      .click();
    
    cy.get('@iframe')
      .find('[data-blueprint="automation"]')
      .find('.list-group-item-text')
      .contains('automation test');
  });
});