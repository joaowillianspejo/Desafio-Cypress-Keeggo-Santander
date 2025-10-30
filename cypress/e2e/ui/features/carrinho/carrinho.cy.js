/// <reference types='cypress'/>

import { Given, And, When, Then } from 'cypress-cucumber-preprocessor/steps'

let nomeProduto
let precoProduto
let initQtdProduto

const qtdProduto = Math.floor(Math.random() * 9 + 2)

Given('que eu acesse a página QA Commerce', () => {
  cy.visit('/')
})

And('seleciono um produto', () => {
  cy.get('#product-list > div .card').then(($produtos) => {
    const qtdProdutos = $produtos.length;
    const indiceAleatorio = Math.floor(Math.random() * qtdProdutos);

    cy.get('#product-list > div .card')
      .eq(indiceAleatorio)
      .find('.card-body > * a').as('produto')
      .invoke('text')
      .then(($nomeProduto) => {
        nomeProduto = $nomeProduto;
      });

    cy.get('#product-list > div .card')
      .eq(indiceAleatorio)
      .find('.card-body')
      .parent()
      .find('p').contains('Preço:')
      .invoke('text')
      .then(($precoProduto) => {
        precoProduto = $precoProduto
      });

    cy.get('@produto').click();
  })

})

And('informo a quantida desejada do produto, sendo ela maior que 1', () => {
  cy.get('#product-quantity')
    .clear()
    .type(qtdProduto)
})

When('seleciono a opção Adicionar ao carrinho', () => {
  cy.get('#cart-count')
    .invoke('text')
    .then(($initQtdProduto) => {
      initQtdProduto = $initQtdProduto
    })

  cy.get('#add-to-cart').click();

  cy.get('#alert-container')
    .contains('Produto adicionado ao carrinho!')
    .should('be.visible')
})

Then('é atualizado o valor de itens no carrinho no no menu superior', () => {
  const cartQtdProduto = parseInt(initQtdProduto) + parseInt(qtdProduto)
  
  cy.contains('#cart-count', cartQtdProduto)
})

And('seleciono a opção Carrinho no menu superior', () => {
  cy.get('.navbar-nav')
    .parent()
    .find('.nav-link')
    .contains('a', 'CARRINHO')
    .click()
})

And('é apresentado a tela de carrinho contendo o iten selecionado', () => {
  cy.get('#cart-list > .cart-item')
    .contains(nomeProduto)
    .should('be.visible')

})

And('o valor da peça', () => {
  cy.get('#cart-list > .cart-item')
    .contains(precoProduto)
    .should('be.visible')
})

And('a quantidade desejada selecionada anteriormente', () => {
  cy.get('#cart-list > .cart-item')
    .contains(`Quantidade: ${qtdProduto}`)
    .should('be.visible')
})

And('o valor total das peças', () => {
  const precoProdutoNum = parseFloat(precoProduto.replace(/[^\d,.]/g, '').replace(',', '.'));
  const totalPrecoProduto = parseFloat(precoProdutoNum) * parseFloat(qtdProduto)

  cy.get('#cart-list > .cart-item')
    .contains(`Total: R$${totalPrecoProduto.toFixed(2)}`)
    .should('be.visible')
})