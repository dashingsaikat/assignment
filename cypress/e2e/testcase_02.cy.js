describe('Form Validations', () => {
    const url = 'https://dev-fe.buttonshift.com/';
    const uniqueEmail = `user${Date.now()}@example.com`;
    const timestamp = Date.now();
    const uniquePassword = `password${timestamp}`;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^password\d{13}$/;
    const otpCode = ['1', '2', '3', '4', '5', '6'];
  
    it('should successfully sign up a new user', () => {
      // Visit the Signup page
      cy.visit(url);
      cy.get('.css-m7nve9 > .MuiButton-contained').click();
        
      //Email
      const clickArrow = cy.get('button[class="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-1cbp9qz"]').click();
      cy.get("#mui-2-helper-text").should('have.text','Email is required');
      cy.get('[data-cy="auth-email-input"]').type(uniqueEmail,{ parseSpecialCharSequences: false });
      clickArrow.click();
      expect(uniqueEmail).to.match(emailRegex);

      //Password
      cy.wait(1000);
      cy.get('[class*=css-1cbp9qz]').click();
      cy.get("#mui-3-helper-text").should('have.text','password field is required');
      cy.get("#mui-4-helper-text").should('have.text','password field is required');
      cy.get('#mui-3').type(uniquePassword,{ parseSpecialCharSequences: false });
      cy.get('#mui-4').type(uniquePassword,{ parseSpecialCharSequences: false });
      expect(uniquePassword).to.match(passwordRegex);
      cy.wait(1000);
      cy.get('[class*=css-1cbp9qz]').click();
      otpCode.forEach((digit, index) => {
      cy.get(`input[aria-label="Please enter OTP character ${index + 1}"]`).type(digit);
      
    });

      //Signup using username, country and phone no
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
    });
  
  
  });
  
  
  