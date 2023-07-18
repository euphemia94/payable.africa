import { SignUp } from "../PageObject/SignUp";

describe('Sign up page', () => {
    let signUp = new SignUp

    beforeEach(() => {
        signUp.visit()
    })
    
    it('sign up with valid details', () => {
        signUp.signUpForm(
            'Euphemia',
            'Nnaemeka',
            'euphemiauc94@gmail.com',
            'uche94',
            ) 
    })

    it('sign up with invalid email formart', () => {
        signUp.signUpForm(
            'Euphemia',
            'Nnaemeka',
            'euphemiaucgmail.com',
            'uche94',
            ) 
    })

    
    it('verify email', () => {
            signUp.verifyEmail('4662');
            should('include', )
    }) 

    it('verify email', () => {
        signUp.login
        should('exist');
}) 
    
    


})