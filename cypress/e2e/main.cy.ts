describe('Главная страница', () => {
    it('открывается и содержит Welcome', () => {
        cy.visit('http://localhost:3000');
        cy.contains('Tailwind работает!');
    });
});