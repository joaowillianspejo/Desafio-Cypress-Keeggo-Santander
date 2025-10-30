/// <reference types='cypress'/>

import { Given, And, Then } from 'cypress-cucumber-preprocessor/steps'

Given('que eu realizo uma requisição do tipo GET na rota de Produtos', () => {
  cy.api({
    url:'http://localhost:3000/api/produtos',
    method: 'GET'
  }).as('response')
})

Then('recebo o status code 200', () => {
  cy.get('@response').then(response => {
    expect(response.status).to.eql(200)
  })
})

And('contendo ao menos um produto no corpo da resposta recebida', () => {
  cy.get('@response').then(response => {
    expect(response.body.products).to.not.be.empty
  })
})

Given('que eu realizo uma requisição do tipo GET na rota de Produtos informando um ID válido', () => {
  cy.api({
    url:'http://localhost:3000/api/produtos/1',
    method: 'GET'
  }).as('response')
})

Then('recebo o status code 200', () => {
  cy.get('@response').then(response => {
    expect(response.status).to.eql(200)
  })
})

And('contendo as informações do produto específico buscado no corpo da resposta recebida', () => {
  const produto = {
    'id': 1,
    'nome': 'Moletom com capuz \"Se você acha que nada é impossível...\"',
    'descricao': 'Moletom com capuz preto fabricado com tecido de alta qualidade e caimento impecável.',
    'preco': 59
  }
  
  cy.get('@response').then(response => {
    expect(response.body.id).to.equal(produto.id)
    expect(response.body.name).to.equal(produto.nome)
    expect(response.body.description).to.equal(produto.descricao)
    expect(response.body.price).to.equal(produto.preco)
  })
})