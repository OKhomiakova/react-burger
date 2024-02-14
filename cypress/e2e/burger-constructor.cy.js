const constructor = 'div[data-cy=burger-constructor]';
const ingredients = 'div[data-cy=ingredients]';
const detailsTitle = 'Детали ингредиента';
const testBunName = 'Краторная булка N-200i';
const testIngredientName = 'Соус фирменный Space Sauce';

const login = 'kolliame@gmail.com';
const password = '123';

describe('service is available', function() {
    it('should be available on localhost:3000', function() {
      cy.visit('http://localhost:3000');
      cy.viewport(1792, 1008);
    });
    it('should open burger-constructor page by default', function() {
      cy.visit('http://localhost:3000');
      cy.viewport(1792, 1008);
      cy.contains('Соберите бургер');
    });
  }); 
  
describe('ingredient modal works correctly', function () {
  beforeEach(function () {
    cy.visit('http://localhost:3000');
    cy.viewport(1792, 1008);
    cy.intercept({
      method: 'GET',
      url: 'api/ingredients'
    }, { fixture: '../fixtures/ingredients.json' });
  })

  it('should work open ingredient details modal', function () {
    cy.contains(detailsTitle).should('not.exist');
    cy.contains(testIngredientName).click();
    cy.contains(detailsTitle).should('exist');
    cy.contains(testIngredientName).should('exist');
  })

  it('should work close ingredient details modal on overlay click', function () {
    cy.contains(detailsTitle).should('not.exist');
    cy.contains(testIngredientName).click();
    cy.contains(detailsTitle).should('exist');
    cy.get('[data-cy=modal-overlay]').click({ force: true });
    cy.contains(detailsTitle).should('not.exist');
  })

  it('should work close ingredient details modal on button click', function () {
    cy.contains(detailsTitle).should('not.exist');
    cy.contains(testIngredientName).click();
    cy.contains(detailsTitle).should('exist');
    cy.get('[aria-label=close]').click();
    cy.contains(detailsTitle).should('not.exist');
  })

  it('should work close ingredient details modal on pressing Esc key', function () {
    cy.contains(detailsTitle).should('not.exist');
    cy.contains(testIngredientName).click();
    cy.contains(detailsTitle).should('exist');
    cy.get('body').type('{esc}');
    cy.contains(detailsTitle).should('not.exist'); 
  })
});

describe('dragging ingredients to constructor works correctly', function () {
    beforeEach(function () {
      cy.visit('http://localhost:3000');
      cy.viewport(1792, 1008);
      cy.intercept({
        method: 'GET',
        url: 'api/ingredients'}, { fixture: '../fixtures/ingredients.json' });
  })
    it('should drag bun', function () {
      cy.get(ingredients)
        .contains(testBunName)
        .trigger('dragstart');
      cy.get(constructor).trigger('drop');
      cy.get('article[data-cy=constructor-top-bun]')
        .contains(testBunName)
        .should('exist')
      cy.get('article[data-cy=constructor-bottom-bun]')
        .contains(testBunName)
        .should('exist');
      cy.get('div.counter')
        .should('be.visible')
        .contains('1');
    })
    it('should drag ingredient ', function () {
      cy.get(ingredients)
        .contains(testIngredientName)
        .trigger('dragstart');
      cy.get(constructor).trigger('drop');
      cy.get('article[data-cy=constructor-ingredient]')
        .contains(testIngredientName)
        .should('exist');
      cy.get('div.counter')
        .should('be.visible')
        .contains('1');
    })
});

describe('Creating order works correctly', function () {
  beforeEach(function () {
    cy.visit('http://localhost:3000');
    cy.viewport(1792, 1008);
    cy.intercept({
      method: 'GET',
      url: 'api/ingredients'}, { fixture: '../fixtures/ingredients.json' });
  })

  it('Should work drag bun and ingredient and create order', function () {
    // добавляем ингредиенты
    cy.get(ingredients)
        .contains(testBunName)
        .trigger('dragstart');
    cy.get(constructor).trigger('drop');
    cy.get(ingredients)
        .contains(testIngredientName)
        .trigger('dragstart');
    cy.get(constructor).trigger('drop');

    // нажимаем кнопку заказа
    cy.contains('Оформить заказ').click();

    // пользователь незалогинен - его перебрасывает на страницу логина
    cy.url().should('include', '/login');

    // пользователь логинится
    cy.get('input[type=email]').type(login);
    cy.get('input[type=password]').type(password);
    cy.get('button[type=submit]').click();

    // залогиненого пользователя перебрасывает обратно на бургер конструктор
    cy.url().should('eq', 'http://localhost:3000/');

    // ингредиенты остались в констукторе
    cy.get('article[data-cy=constructor-top-bun]')
      .contains(testBunName)
      .should('exist')
    cy.get('article[data-cy=constructor-bottom-bun]')
      .contains(testBunName)
      .should('exist');
    cy.get('article[data-cy=constructor-ingredient]')
      .contains(testIngredientName)
      .should('exist');

    // пользователь успешно оформляет заказ
    cy.contains('Оформить заказ').click();
    cy.contains('Ожидайте...').should('exist');
    cy.contains('идентификатор заказа', { timeout: 150000 }).should("be.visible");
  })
});