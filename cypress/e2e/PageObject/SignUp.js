const xpath = require('cypress-xpath');

export class SignUp {
    visit(){
        cy.visit('https://staging.payable.africa/');
    }

    signUpForm(firstName, lastName, email, passward){
        cy.xpath('//*[@id=":r4:"]').click();
        cy.xpath('//*[@id=":rm:"]').type(firstName);
        cy.xpath('//*[@id=":rn:"]').type(lastName);
        cy.xpath('//*[@id=":ro:"]').type(email);
        cy.xpath('//*[@id=":rp:"]').type(passward);
        cy.xpath('//*[@id="root"]/div[1]/main/div/div/div[2]/form/div/div[9]/label/span[1]/input').click();
        cy.xpath('//*[@id=":rq:"]').click();
    }

    verifyEmail(code){
        cy.xpath('').click();
    }

    login(){
        cy.xpath('//*[@id=":r19:"]');
    }

    


}

