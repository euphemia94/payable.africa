import { SignUp } from "../PageObject/SignUp";
import { email } from "../helper"

describe('Sign up page', () => {
    let signUp = new SignUp

    beforeEach(() => {
        signUp.visit()
    })
    
    it('sign up with valid details', () => {
        signUp.signUpForm(
            'Euphemia',
            'Nnaemeka',
            email,
            'uche94',
        )
        cy.xpath('//*[@id=":rd:"]').should("exist");        
    })

    it('sign up with invalid email formart', () => {
        signUp.signUpForm(
            'Euphemia',
            'Nnaemeka',
            'euphemiaucgmail.com',
            'uche94',
        ) 
        cy.xpath('//*[@id=":ra:-helper-text"]').should('exist')
        .and("contain.text, 'email address must be a valid email")
    })
})