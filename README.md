 # Cypress E2E Tests

 Este repositório contém testes end-to-end (E2E) automatizados usando o framework Cypress para o site [Sauce Demo](https://www.saucedemo.com/).

 ## Pré-requisitos

 *   Node.js e npm (ou yarn) instalados.
 *   Cypress instalado (você pode instalar globalmente ou como uma dependência do projeto).

 ## Instalação

 1.  Clone o repositório:

     ```bash
     git clone https://github.com/lucascc19/cypress-e2e-tests.git
     ```

 2.  Navegue até o diretório do projeto:

     ```bash
     cd cypress-e2e-tests
     ```

 3.  Instale as dependências (incluindo o Cypress, se ainda não estiver instalado):

     ```bash
     npm install
     # ou
     yarn install
     ```

 ## Executando os Testes

 Você pode executar os testes de duas maneiras:

 ### 1. Modo Interativo (Cypress Test Runner)

 ```
 npx cypress open
 # ou
 yarn cypress open
```

Isso abrirá o Cypress Test Runner, onde você pode selecionar e executar os testes individualmente, além de acompanhar a execução em tempo real.

 ### 2. Modo Headless (Linha de Comando)

 ```
 npx cypress run
 # ou
 yarn cypress run
```

Este comando executa todos os testes em modo headless (sem interface gráfica) e gera relatórios no terminal.

 ## Estrutura dos Testes

 Os testes estão localizados no diretório `cypress/e2e/`.  Os principais arquivos são:

 *   `login.cy.js`: Contém testes para a funcionalidade de login, incluindo cenários de sucesso e falha (usuário bloqueado).
 *   `cart.cy.js`: Contém testes para a funcionalidade do carrinho de compras, como adicionar e remover produtos.

 ## Asserções e Screenshots

 Os testes utilizam asserções para verificar se o comportamento do site corresponde ao esperado.  Além disso, são tirados screenshots em pontos-chave dos testes para auxiliar na análise de resultados e depuração.
