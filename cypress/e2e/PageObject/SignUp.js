const xpath = require('cypress-xpath');
export class SignUp {
    visit(){
        cy.visit('https://staging.payable.africa/');
    }

    signUpForm(firstName, lastName, email, passward){
        cy.xpath('//*[@id=":r10:"]').click();
        cy.xpath('//*[@id=":r14:"]').type(firstName);
        cy.xpath('//*[@id=":r15:"]').type(lastName);
        cy.xpath('//*[@id=":r16:"]').type(email);
        cy.xpath('//*[@id=":r17:"]').type(passward);
        cy.xpath('//*[@id="root"]/div[1]/main/div/div/div[2]/form/div/div[9]/label/span[1]/input').click();
        cy.xpath('//*[@id=":r18:"]').click();
    }

    verifyEmail(code){
        cy.xpath('').click();
    }

    login(){
        cy.xpath('//*[@id=":r19:"]');
    }

    


}

