/// <reference types='cypress'/>

import { Given, And, Then } from 'cypress-cucumber-preprocessor/steps'

Given('que eu realizo uma requisição do tipo POST na rota de Carrinho, informando os dados corretamento no body da requisição', () => {
  const produto = {
    'userId': 1,
    'productId': 1,
    'quantity': 5
  }
  
  cy.api({
    url:'http://localhost:3000/api/carrinho',
    method: 'POST',
    body: produto
  }).as('response')
})

Then('recebo o status code 201', () => {
  cy.get('@response').then(response => {
    expect(response.status).to.eql(201)
  })
})

And('recebo no corpo da resposta o ID do carrinho junto com uma mensagem de sucesso', () => {
  cy.get('@response').then(response => {
    expect(response.body.id).to.not.be.empty
    expect(response.body.message).to.equal('Produto adicionado ao carrinho com sucesso.')
  })
})