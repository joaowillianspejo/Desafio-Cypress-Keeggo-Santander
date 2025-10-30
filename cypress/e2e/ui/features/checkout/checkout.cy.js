/// <reference types='cypress'/>

import { Given, And, When, Then } from 'cypress-cucumber-preprocessor/steps'
import { Faker, pt_BR } from '@faker-js/faker'

const faker = new Faker({locale: pt_BR})

const qtdProduto = Math.floor(Math.random() * 9 + 2)

Given('que eu tenha ao menos um produto no carrinho', () => {
    cy.visit('/')

    cy.get('#product-list > div .card').then(($produtos) => {
      const qtdProdutos = $produtos.length;
      const indiceAleatorio = Math.floor(Math.random() * qtdProdutos);

      cy.get('#product-list > div .card')
        .eq(indiceAleatorio)
        .find('.card-body > * a').click()
    })

    cy.get('#product-quantity')
      .clear()
      .type(qtdProduto)

    cy.get('#add-to-cart').click();
})

And('seleciono a opção Carrinho no menu superior', () => {
  cy.get('.navbar-nav')
    .parent()
    .find('.nav-link')
    .contains('a', 'CARRINHO')
    .click()
})

And('seleciono a opção Ir para o Checkout', () => {
  cy.get('#totals > .btn')
    .contains('a', 'Ir para o Checkout')
    .click()
})

And('preencho os campos da seção Dados para entrega', () => {
  const nome = faker.person.firstName();
  const sobrenome = faker.person.lastName()
  const endereco = faker.location.street()
  const numero = Math.floor(Math.random() * 99 + 2)
  const cep = faker.location.zipCode('########')
  const telefone = faker.phone.number('(##) #####-####')
  const email = faker.internet.email({ firstName: nome, lastName: sobrenome })

  cy.get('#first-name').type(nome)
  cy.get('#last-name').type(sobrenome)
  cy.get('#address').type(endereco)
  cy.get('#number').type(numero)
  cy.get('#cep').type(cep)
  cy.get('#phone').type(telefone)
  cy.get('#email').type(email)
})

And('seleciono o metodo de pagamento', () => {
  cy.get('#payment-boleto').click()
})

And('seleciono a confirmação dos termos e condições', () => {
  cy.get('#terms').click()
})

When('seleciono a opção Finalizar Pedido', () => {
  cy.contains('button', 'Finalizar Pedido').click()
})

Then('sou direcionado para a tela de Status do Pedido', () => {
  cy.get('#app > h1').should('have.text', 'STATUS DO PEDIDO')
})

And('é informado o ID do meu pedido, junto com o valor total pago e status do pedido', () => {
  cy.get('#order-status > p')
    .contains('p', 'ID do Pedido: ')
    .find('strong')
    .should('not.be.empty')

  cy.get('#order-status > p')
    .contains('p', 'Total: ')
    .find('strong')
    .should('not.be.empty')

  cy.get('#order-status > p')
    .contains('p', 'Status: ')
    .find('strong')
    .should('not.be.empty')
})

Given('que seleciono a opção Ir para o Checkout', () => {})

And('não preencho os campos Nome, Sobrenome, Endereço, Número, CEP, e Email da seção Dados para entrega', () => {})

And('não seleciono a confirmação dos termos e condições', () => {})

When('seleciono a opção Finalizar Pedido', () => {})

Then('é exibido um alerta na parte superior da tela contendo a frase: Por favor, preencha todos os campos obrigatório marcados com asteriscos!', () => {})

And('é exibido um alerta de erro abaixo do campo Nome contendo a frase: Este campo é obrigatório.', () => {})

And('é exibido um alerta de erro abaixo do campo Sobrenome contendo a frase: Este campo é obrigatório.', () => {})

And('é exibido um alerta de erro abaixo do campo Endereço contendo a frase: Este campo é obrigatório.', () => {})

And('é exibido um alerta de erro abaixo do campo Número contendo a frase: Este campo é obrigatório.', () => {})

And('é exibido um alerta de erro abaixo do campo CEP contendo a frase: Este campo é obrigatório.', () => {})

And('ainda abaixo do campo CEP também é exibido um segundo alerta de erro contendo a frase: O CEP deve ter 8 caracteres.', () => {})

And('é exibido um alerta de erro abaixo do campo Email contendo a frase: Este campo é obrigatório.', () => {})

And('ainda abaixo do campo Email também é exibido um segundo alerta de erro contendo a frase: Por favor, insira um email válido.', () => {})

And('é exibido um alerta de erro abaixo do campo de confirmação dos termos e condições contendo a frase: Este campo é obrigatório.', () => {})