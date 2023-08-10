import { SignUp } from "../PageObject/SignUp";
import { email } from "../helper"

describe('Sign up page', () => {
    let signUp = new SignUp;
    const num = Math.floor(Math.random());
    const email = `test1payable${num}${num}@example.com`;

    beforeEach(() => {
        signUp.visit();
    })
    
    it('sign up with valid details', () => { 
        signUp.signUpForm(
            'Euphemia',
            'Nnaemeka',
            email,
            'uchegodgg94',
        );
    })

    it.only('sign up with invalid email formart', () => {
        signUp.signUpForm(
            'Euphemia',
            'Nnaemeka',
            'euphemiaucgmail.com',
            'uchechukwu94',
        );
        cy.on("window:alert", (message) => {
            expect(message).to.equal('email address must be a valid email');
        })
    })

    it('sign up with already existing user details', () => {
        signUp.signUpForm(
            'Euphemia',
            'Nnaemeka',
            'euphemiauc94@gmail.com', 
            'euphemia94',
        )
        cy.on("window:alert", (message) => {
            expect(message).to.equal('User with email already created, please log in');
        })    
    })

    
})