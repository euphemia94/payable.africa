export const email = function generateEmail() {
    cy.visit('https://temp-mail.org/en')
    return cy.xpath('//*[@id="tm-body"]/div[1]/div/div/div[2]/div[1]/form/div[1]/div/button[2]').click()
    cy.switchToNewTab()
}