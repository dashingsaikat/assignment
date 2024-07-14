describe('User Signup and Login', () => {
  const url = 'https://dev-fe.buttonshift.com/';
  const uniqueEmail = `user${Date.now()}@example.com`;
  const timestamp = Date.now();
  const uniquePassword = `password${timestamp}`;
  const otpCode = ['1', '2', '3', '4', '5', '6'];

  it('should successfully sign up a new user', () => {
    // Visit the Signup page
    cy.visit(url);
    cy.get('.css-m7nve9 > .MuiButton-contained').click();
    cy.get('[data-cy="auth-email-input"]').type(uniqueEmail,{ parseSpecialCharSequences: false });
    cy.get('button[class="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-1cbp9qz"]').click();
    cy.get('#mui-3').type(uniquePassword,{ parseSpecialCharSequences: false });
    cy.get('#mui-4').type(uniquePassword,{ parseSpecialCharSequences: false });
    cy.get('[class*=css-1cbp9qz]').click();
    otpCode.forEach((digit, index) => {
    cy.get(`input[aria-label="Please enter OTP character ${index + 1}"]`).type(digit);
    
  });
  
    cy.get('[class*="css-1cbp9qz"]').click();
    cy.wait(3000);
    cy.get("input[placeholder='choose location']").click().clear().type("India",{delay:200});
    cy.get("#mui-8-option-1").click();
    cy.get('[data-cy="signup-phone-input"]').type(timestamp);
    cy.get('[data-cy="signup-phone-verify-button"]').click();
    otpCode.forEach((digit, index) => {
    cy.get(`input[aria-label="Please enter OTP character ${index + 1}"]`).type(digit);
    
    });
    cy.get('[data-cy="signup-submit-button"]').click();
    cy.get('button[aria-label="Menu"]').click();
    cy.log(cy.get('button[aria-label="Logout"').should('be.visible'));
  });

  // it('should verify form', () => {
  //     cy.visit(url);
  //     cy.get('.css-m7nve9 > .MuiButton-contained').click();
  //     cy.get('button[class="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-1cbp9qz"]').click();
  //     cy.get("#mui-2-helper-text").should('have.text','Email is required');
  //     cy.get('[data-cy="auth-email-input"]').type('saikat.gsm@gmail.com');
  //     cy.get("button[type='submit']").click();
  //     cy.get('#mui-3-helper-text').should('have.text','Password cannot be blank');

  // });


});


