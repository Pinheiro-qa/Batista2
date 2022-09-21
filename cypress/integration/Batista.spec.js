///<reference types="cypress"/>

// teste de formulario de cadastro
// teste dois de formulario de cadastro
describe('Batista', () => {
    const data = require('../fixtures/data')
    data.forEach((item, index) => {
        it (`${index + 1} - fills` , () => {
            cy.visit('http://automacaocombatista.herokuapp.com/users/new')
            cy.get('#user_name').type(item.campoNome)
            cy.get('#user_lastname').type(item.campoSobrenome)
            cy.get('#user_email').type(item.campoEmail)
            cy.get('#user_address').type(item.campoEndereco)
            cy.get('#user_university').type(item.campoUniversity)
            cy.get('#user_profile').type(item.campoProfissao)
            cy.get('#user_gender').type(item.campoGenero)
            cy.get('#user_age').type(item.campoIdade)
            cy.get('.actions > input').click()
            cy.get('.row.center')
              .should('be.visible')
              .and('contain', 'Usuário Criado com sucesso')
           
        })  
    })
    it('Lista', () => {
        cy.get('.active > .collapsible-body > ul > :nth-child(2) > a').click()
        cy.get('.tamanhodiv2 > .center')
          .should('be.visible')
          .and('contain', 'Lista de Usuários!!')
    })
});