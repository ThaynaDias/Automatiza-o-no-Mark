describe('tarefas', () => {
    it('deve cadastrar uma nova tarefa', () => {

        const taskName = 'Ler um livro de Nodejs'

        cy.removeTaskByName(taskName)
        cy.createTask(taskName)
        cy.contains('main div  p', taskName).should('be.visible')
    })


    it ('Não deve cadastrar tarefas duplicadas', () => {

        const task = {
            name: 'Livro de js',
            is_done: false
        }

        cy.removeTaskByName(task.name)

        // Dado que eu tenho uma tarefa duplicada
        cy.postTask(task)

        // Quando faço o cadastrado dessa tarefa
        cy.createTask(task.name)

        // Então vejo a mensagem de duplicidade
        cy.get('.swal2-html-container')
            .should('be.visible')
            .should('have.text', 'Task already exists!')
    })
})
