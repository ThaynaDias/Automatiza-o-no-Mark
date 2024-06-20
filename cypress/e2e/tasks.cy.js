describe('tarefas', () => {
    it('deve cadastrar uma nova tarefa', () => {

        cy.request({
            url: 'http://localhost:3333/helper/tasks',
            method: 'DELETE',
            body: {name: 'Ler livro js'}

        }).then(response => {

            expect(response.status).to.eq(204)
        })
        
        cy.visit('http://localhost:3000/')
        cy.get('input[placeholder="Add a new Task"]').type("Ler livro js")

        cy.contains('button', 'Create').click()

        cy.contains('main div  p', 'Ler livro js').should('be.visible')
    })
})