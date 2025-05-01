describe('Add to cart', () => {
  beforeEach(() => {
    //Arrange
    // Arrange: Configuração inicial para cada teste
    // Visita a página inicial do site
    cy.visit('https://www.saucedemo.com/')
    // Digita o nome de usuário no campo correspondente
    cy.get('[data-test="username"]').type('standard_user')
    // Digita a senha no campo correspondente
    cy.get('[data-test="password"]').type('secret_sauce')
    // Clica no botão de login
    cy.get('[data-test="login-button"]').click()
  })

  it('bought product successfully', () => {
    // Clica no botão "Adicionar ao carrinho" para o produto "Sauce Labs Backpack"
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()

    // Verifica se o ícone do carrinho está visível e exibe o número 1 (indicando um produto no carrinho)
    cy.get('[data-test="shopping-cart-badge"]').should('be.visible').and('have.text', '1')

    // Clica no link do carrinho para navegar para a página do carrinho
    cy.get('[data-test="shopping-cart-link"]').click()

    // Verifica se o nome do produto "Sauce Labs Backpack" está visível na página do carrinho
    cy.contains('Sauce Labs Backpack').should('be.visible')

    cy.screenshot('cart') // Tira um screenshot da página do carrinho

    // Clica no botão do menu "hambúrguer" (menu lateral)
    cy.get('#react-burger-menu-btn').click()
    // Clica no link "Inventory" no menu lateral (retorna à página de produtos)
    cy.get('[data-test="inventory-sidebar-link"]').click()

    // Verifica se o botão "Remove" está visível e clica nele (remove o produto do carrinho na página de produtos)
    cy.contains('Remove').should('be.visible').click()

  })
})