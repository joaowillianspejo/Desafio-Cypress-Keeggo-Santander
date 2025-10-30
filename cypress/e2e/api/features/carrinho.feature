Feature: Carrinho

  Scenario: Adiciona produto ao carrinho
    Given que eu realizo uma requisição do tipo POST na rota de Carrinho, informando os dados corretamento no body da requisição
    Then recebo o status code 201
    And recebo no corpo da resposta o ID do carrinho junto com uma mensagem de sucesso