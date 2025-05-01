describe("Login Tests", () => {
  beforeEach(() => {
    // Arrange: Visita a página de login antes de cada teste
    cy.visit("https://www.saucedemo.com/");
  });

  describe("Successful Login", () => {
    it("should login successfully with valid credentials", () => {
      // Act: Preenche o formulário de login e submete
      cy.get('[data-test="username"]').type("standard_user");
      cy.get('[data-test="password"]').type("secret_sauce");
      cy.get('[data-test="login-button"]').click();

      // Assert: Verifica se o usuário é redirecionado para a página de inventário
      cy.url().should("eq", "https://www.saucedemo.com/inventory.html");

      // Opcional: Verifica se o botão de logout está visível (indicando que o login foi bem-sucedido)
      // cy.get("#react-burger-menu-btn").click();
      // cy.get('[data-test="logout-sidebar-link"]').should('be.visible');
    });
  });

  describe("Failed Login", () => {
    it("should display an error message for locked out user", () => {
      // Arrange: Obtém as credenciais do usuário bloqueado (poderia ser um fixture ou variável)
      // e preenche o formulário
      cy.get('[data-test="username"]').type("locked_out_user");
      cy.get('[data-test="password"]').type("secret_sauce");

      // Act: Submete o formulário
      cy.get('[data-test="login-button"]').click();

      // Assert: Verifica se a mensagem de erro correta é exibida
      cy.get('[data-test="error"]').should(
        "contain.text",
        "Epic sadface: Sorry, this user has been locked out."
      );

      // Tira um screenshot da mensagem de erro
      cy.screenshot("locked_out_user_error");
    });
  });
});
