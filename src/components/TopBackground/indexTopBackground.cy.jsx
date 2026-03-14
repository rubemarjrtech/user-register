import { mount } from 'cypress/react';
import TopBackground from './index'

describe('<TopBackground />', () => {
  it('renders', () => {
    mount(<TopBackground />)

    cy.get('div')
      .should('exist')
      .and('be.visible');
  })

  it('has an image', () => {
      mount(<TopBackground />)

      cy.get('div').find('img').should('be.visible').and('have.attr', 'src', '/__cypress/src/src/assets/users.png').and('have.attr', 'alt', 'imagem-usuarios')
  })
})