# language: pt
Funcionalidade: Login no Portal do Aluno
  Como um aluno
  Quero acessar o Portal do Aluno
  Para visualizar minhas notas e atividades

  Cenario: Login com credenciais validas
    Dado que eu acesse a pagina de login do Portal do Aluno
    Quando eu insiro o meu CPF e senha validos
    E clico no botao "Entrar"
    Entao eu devo ser redirecionado para a pagina inicial do portal
    E devo ver a mensagem "Bem-vindo"

  Cenario: Login com senha invalida
    Dado que eu acesse a pagina de login do Portal do Aluno
    Quando eu insiro o meu CPF valido e uma senha invalida
    E clico no botao "Entrar"
    Entao eu devo permanecer na pagina de login
    E devo ver a mensagem de erro "Usuario ou senha incorretos"
