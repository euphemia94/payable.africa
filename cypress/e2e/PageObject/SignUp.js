export class SignUp {
    visit(){
        cy.visit('https://staging.payable.africa/');
    }

    signUpForm(firstName, lastName, email, passward){
        cy.xpath('//*[@id=":r4:"]').click();
        cy.xpath('//*[@id=":r8:"]').type(firstName);
        cy.xpath('//*[@id=":r9:"]').type(lastName);
        cy.xpath('//*[@id=":ra:"]').type(email);
        cy.xpath('//*[@id=":rb:"]').type(passward);
        cy.xpath('//*[@id="root"]/div[1]/main/div/div/div[2]/form/div/div[9]/label/span[1]/input').click();
        cy.xpath('//*[@id=":rc:"]').click();

    }

    verifyEmail(code){
        cy.xpath('//*[@id=":r10:"]').type(code);
        cy.xpath('//*[@id=":r11:"]').type(code);        
    }

        
}


