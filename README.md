# Atividade Prática — Unidade 3: Qualidade e Teste de Software

**Curso:** Análise e Desenvolvimento de Sistemas  
**Disciplina:** Qualidade e Teste de Software  
**Atividade:** Tarefa da Unidade 3  

---

## 📹 Demonstração em Vídeo
O vídeo explicativo detalhando a arquitetura dos testes, o código das automações e as execuções práticas pode ser acessado através do link abaixo:

🔗 **[Acessar Gravação no Google Drive](https://drive.google.com/drive/folders/1C57zjiuZcGfrN6xASKYXzQNzqFxY1kQ2?usp=sharing)**

---

## 🎯 Objetivo da Atividade

A atividade contempla a aplicação prática de técnicas de testes automatizados em duas frentes fundamentais da engenharia de qualidade de software:

1. **Automação de API (Data-Driven Testing):**
   - Consumo do endpoint público de consulta de CEPs da API ViaCEP (`https://viacep.com.br/ws/{{cep}}/json/`).
   - Construção de massa de dados estruturada em JSON contendo 3 campos (`cep`, `cidade`, `estado`) com 10 registros de capitais brasileiras.
   - Validação automatizada de integridade: checagem de código de resposta HTTP (200 OK) e comparação dinâmica da correspondência exata entre o CEP consultado e os dados retornados de cidade e estado.

2. **Automação Web (BDD com Gherkin e Cypress):**
   - Especificação de cenários de teste baseados em comportamento (BDD) para a funcionalidade de Login no Portal do Aluno.
   - Cobertura de fluxo positivo (credenciais válidas) e fluxo de exceção (senha incorreta).
   - Implementação da suíte executável integrada com Cypress e o pré-processador do Cucumber (`@badeball/cypress-cucumber-preprocessor`).

---

## 📁 Estrutura do Projeto

```text
Resolucao_Atividade_3/
├── .gitignore                                 # Regras de exclusão do Git
├── README.md                                  # Documentação técnica e guia de execução
├── dados_cep.json                             # Massa de dados de entrada com 10 CEPs
├── ViaCEP_Automation.postman_collection.json  # Coleção Postman parametrizada com testes
└── Web_Automation/                            # Projeto de automação Web com Cypress + BDD
    ├── package.json                           # Configurações do projeto e dependências
    ├── cypress.config.js                      # Configuração do Cypress e plugin Cucumber
    └── cypress/
        ├── e2e/
        │   └── login_portal_aluno.feature     # Especificação dos cenários BDD em Gherkin
        └── support/
            ├── e2e.js                         # Arquivo global de suporte do Cypress
            └── step_definitions/
                └── login_steps.js             # Mapeamento e implementação dos passos
```

---

## 🛠️ Tecnologias Utilizadas

* **Node.js** (v18+)
* **Postman / Newman** (Automação e execução de testes de API)
* **Cypress** (Framework de automação de testes End-to-End)
* **Cucumber / Gherkin** (Especificação orientada a comportamento — BDD)

---

## 🚀 Como Executar os Testes

### 1. Pré-requisitos
Certifique-se de ter o [Node.js](https://nodejs.org/) instalado em seu computador.

---

### 2. Executando os Testes de API (ViaCEP)

Você pode executar os testes da API de duas maneiras:

#### Opção A: Pelo Terminal via Newman (Recomendado)
Estando na raiz da pasta `Resolucao_Atividade_3`, execute:
```bash
npx newman run ViaCEP_Automation.postman_collection.json -d dados_cep.json
```
> O Newman executará as 10 iterações de forma autônoma, validando o status HTTP, cidade e UF de cada requisição e gerando o relatório consolidado diretamente no console.

#### Opção B: Pelo Postman Desktop
1. Abra o **Postman** e clique em **Import** (canto superior esquerdo).
2. Selecione o arquivo `ViaCEP_Automation.postman_collection.json`.
3. Abra o **Collection Runner** da coleção importada.
4. No campo **Data**, clique em **Select File** e selecione o arquivo `dados_cep.json`.
5. Confirme se o Postman identificou 10 iterações e clique no botão **Run ViaCEP_Automation**.

---

### 3. Executando a Automação Web (Cypress + Cucumber)

1. Acesse o diretório do projeto Web:
   ```bash
   cd Web_Automation
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Execute os testes no terminal (modo Headless):
   - **No PowerShell:**
     ```powershell
     $env:ELECTRON_RUN_AS_NODE="" ; npx cypress run
     ```
   - **No CMD:**
     ```cmd
     set ELECTRON_RUN_AS_NODE= && npx cypress run
     ```

4. *(Opcional)* Para abrir a interface interativa do Cypress:
   ```powershell
   $env:ELECTRON_RUN_AS_NODE="" ; npx cypress open
   ```
   Selecione **E2E Testing** e execute o arquivo `login_portal_aluno.feature`.

---

## 📋 Resultados dos Testes

* **API ViaCEP:** 10 requisições executadas com 30 asserções validadas (100% de sucesso).
* **Web Portal do Aluno:** 2 cenários BDD compilados e executados com sucesso no Cypress.
