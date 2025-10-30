Feature: Produtos

  Scenario: Listar Produtos
    Given que eu realizo uma requisição do tipo GET na rota de Produtos
    Then recebo o status code 200
    And contendo ao menos um produto no corpo da resposta recebida

  Scenario: Buscar Produto por ID
    Given que eu realizo uma requisição do tipo GET na rota de Produtos informando um ID válido
    Then recebo o status code 200
    And contendo as informações do produto específico buscado no corpo da resposta recebida