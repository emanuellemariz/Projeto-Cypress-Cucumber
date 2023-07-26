Feature: Formulário de Opinião da Academia

Scenario: Preenchendo o formulário com informações corretas
    Given que acesso a página do formulário da academia
    When eu preencho o campo Data com uma data válida
        And preencho o campo Pontuação com um número
        And preencho o campo Sua Opinião
        And clico no botão Enviar
    Then deve aparecer um resumo sobre as informações preenchidas
