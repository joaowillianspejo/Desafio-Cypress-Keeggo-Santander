Feature: Carrinho

  Como cliente, desejo adicionar produtos ao carrinho
  Para efetuar a compra posteriormente

  Scenario: Adicionar Produto ao Carrinho
    Given que eu acesse a página QA Commerce
    And seleciono um produto
    And informo a quantida desejada do produto, sendo ela maior que 1
    When seleciono a opção Adicionar ao carrinho
    Then é atualizado o valor de itens no carrinho no no menu superior
    And seleciono a opção Carrinho no menu superior
    And é apresentado a tela de carrinho contendo o iten selecionado
    And o valor da peça
    And a quantidade desejada selecionada anteriormente
    And o valor total das peças