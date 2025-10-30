Feature: Checkout

  Como cliente, desejo realizar o Checkout do meu pedido

  Scenario: Realizar Checkout Simples
    Given que eu tenha ao menos um produto no carrinho
    And seleciono a opção Carrinho no menu superior
    And seleciono a opção Ir para o Checkout
    And preencho os campos da seção Dados para entrega
    And seleciono o metodo de pagamento
    And seleciono a confirmação dos termos e condições
    When seleciono a opção Finalizar Pedido
    Then sou direcionado para a tela de Status do Pedido
    And é informado o ID do meu pedido, junto com o valor total pago e status do pedido


  Scenario: Validação de Campos Obrigatórios
    Given que seleciono a opção Ir para o Checkout
    And não preencho os campos Nome, Sobrenome, Endereço, Número, CEP, e Email da seção Dados para entrega
    And não seleciono a confirmação dos termos e condições
    When seleciono a opção Finalizar Pedido
    Then é exibido um alerta na parte superior da tela contendo a frase: Por favor, preencha todos os campos obrigatório marcados com asteriscos!
    And é exibido um alerta de erro abaixo do campo Nome contendo a frase: Este campo é obrigatório.
    And é exibido um alerta de erro abaixo do campo Sobrenome contendo a frase: Este campo é obrigatório.
    And é exibido um alerta de erro abaixo do campo Endereço contendo a frase: Este campo é obrigatório.
    And é exibido um alerta de erro abaixo do campo Número contendo a frase: Este campo é obrigatório.
    And é exibido um alerta de erro abaixo do campo CEP contendo a frase: Este campo é obrigatório.
    And ainda abaixo do campo CEP também é exibido um segundo alerta de erro contendo a frase: O CEP deve ter 8 caracteres.
    And é exibido um alerta de erro abaixo do campo Email contendo a frase: Este campo é obrigatório.
    And ainda abaixo do campo Email também é exibido um segundo alerta de erro contendo a frase: Por favor, insira um email válido.
    And é exibido um alerta de erro abaixo do campo de confirmação dos termos e condições contendo a frase: Este campo é obrigatório.