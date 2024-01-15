/// <reference types="cypress" />

describe('testes para funcionalidades inclusão', () => {
    it('Deve incluir um contato', () => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
        cy.get('button[type="submit"]').click()
    })
})

describe('testes para funcionalidades alteração', () => {
    it('Deve editar um contato', () => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
        cy.get('.edit').click()
    })
})

describe('testes para funcionalidades remoção', () => {
    it('Deve deletar um contato', () => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
        cy.get('.delete').click()
    })
})