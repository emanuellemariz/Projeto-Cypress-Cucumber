import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";

Given("que acesso a página do formulário da academia", () => {
    cy.visit("https://api.new.mentorama.com.br/storage/media-files/QA1/M3/2/tarefa_2.html");
});

When("eu preencho o campo Data com uma data válida", () => {
    cy.get('input[class="date"]').type('10/05/2022');
});

When("preencho o campo Pontuação com um número", () => {
    cy.get('input[class="mark"]').type('10');
});

When("preencho o campo Sua Opinião", () => {
    cy.get('textarea[name="comment"]').type('Opinião123');
});

When("clico no botão Enviar", () => {
    cy.get('button').click();
});

Then("deve aparecer um resumo sobre as informações preenchidas", () => {
    cy.get('pre[class="last-visit"]').should('contain.text', '"10/05/2022"');
    cy.get('pre[class="your-mark"]').should('contain.text', '"10"');
    cy.get('pre[class="your-comment"]').should('contain.text', '"Opinião123"');
})