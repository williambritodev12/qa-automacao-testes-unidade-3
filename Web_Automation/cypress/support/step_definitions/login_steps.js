import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("que eu acesse a pagina de login do Portal do Aluno", () => {
  cy.log("Acessando a pagina de login do Portal do Aluno");
});

When("eu insiro o meu CPF e senha validos", () => {
  cy.log("Inserindo CPF e Senha validos");
});

When("eu insiro o meu CPF valido e uma senha invalida", () => {
  cy.log("Inserindo CPF valido e Senha invalida");
});

When("clico no botao {string}", (botao) => {
  cy.log(`Clicando no botao: ${botao}`);
});

Then("eu devo ser redirecionado para a pagina inicial do portal", () => {
  cy.log("Redirecionamento para a pagina inicial validado");
});

Then("devo ver a mensagem {string}", (mensagem) => {
  cy.log(`Mensagem visualizada: ${mensagem}`);
});

Then("eu devo permanecer na pagina de login", () => {
  cy.log("Permanencia na pagina de login validada");
});

Then("devo ver a mensagem de erro {string}", (mensagemErro) => {
  cy.log(`Mensagem de erro visualizada: ${mensagemErro}`);
});
