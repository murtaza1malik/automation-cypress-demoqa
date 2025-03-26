describe('DemoQA', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      })
    it('tests practice form page', () => {
cy.visit('https://demoqa.com/')
cy.get('[class="card mt-4 top-card"]').eq(1).click()
cy.get('[class="element-list collapse show"]').click()
cy.get('#firstName').type('Murtaza')
cy.get('#lastName').type('malik')
cy.get('#userEmail').type('murtazanasir1615@gmail.com')
cy.get('[class="custom-control-label"]').eq(0).click()
cy.get('#userNumber').type('1234567890')
cy.get('#dateOfBirthInput')
.invoke('val', '14 Mar 2005')
  .trigger('change')
cy.get('#subjectsContainer').type('Computer Science')
cy.get('#react-select-2-option-0').click()
cy.get('[class="custom-control-label"]').eq(3).click({ force: true })
cy.get('[class="form-control-file"]').click().selectFile('C:/Users/murtaza/Documents/SQA/Office/SQA-plan.jpg')
cy.get('#currentAddress').type('Bedian Road, Lahore')
//cy.get('.css-yk16xz-control > .css-1wy0on6 > .css-tlfecz-indicatorContainer').click()
//cy.get('#react-select-3-option-2').click()
//cy.get('[class="css-19bqh2r"]').eq(1).click()
//cy.get('#react-select-4-option-0').click()
cy.get('#state').click()
cy.get('#react-select-3-option-2').click()
cy.get('#city').click()
cy.get('#react-select-4-option-0').click()
cy.get('#submit').click()




    }) 
})