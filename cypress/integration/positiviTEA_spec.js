describe('positiviTEA. Landing Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('Should be able to visit landing page and have a title, logo, info text and button', () => {
    cy
      .get('main').find('.header').should('contain','positiviTEA.')
      .get('main').find('.teacup').should('have.attr','src').should('include', '/static/media/tea.163cd0ac.svg')
      .get('main').find('.intro-text').should('contain', 'Get the tea on all things good and interesting happening in the world.')
      .get('main').find('.spill-button').should('contain', 'Spill it..')
  })
})

describe('positiviTEA. Story of the Day Page', () => {
  beforeEach(() => {
      cy.intercept('GET', '/random', {fixture: 'quoteData.json'})
      cy.intercept('GET','/everything',{
        q: 'diversity',
        q: 'mindfulness',
        q: 'science',
        q: 'innovation',
        q: 'funny',
        q: 'national geographic',
        q: 'optimistic',
        q: 'social justice',
        q: 'art',
        q: 'technology',
        q: 'kindness',
        q: 'sustainability',
        q: 'space',
        fixture:'mockData.json',
        statusCode: 201,
      })

  })

  it('Should be able to click spill button and be navigated to story of the day page with a header, main content section and nav buttons', () => {
    cy.get('a[href*="/story"]').click().get('.story').should('be.visible').children('.sod', '.contentWrapper', '.navBtns')
    cy.url().should('include', 'story')
  })

  it('Should have a header that includes a random quote and author', () => {
    cy
      .get('header').children('.homeButton', '.quoteWrapper')
      .get('.homeButton').find('.link').should('contain', 'positiviTEA.')
      .get('.quoteWrapper')
      .find('.quote').should('contain', 'In the middle of every difficulty lies opportunity.')
      .get('.quoteWrapper')
      .find('.author').should('contain', 'Albert Einstein')
  })

  it('Should navigate back to main page when positiviTEA link is clicked in the header', () => {
    cy
      .get('header').children('.homeButton').find('a[href*="/story"]').should('contain', 'positiviTEA.').click()
    cy.url().should('include', 'story')
  })

  it('Should have a header, image, title, date, label, description and link to the full story in the main content section', () => {
    cy
      .get('.story').find('.sod').should('contain', 'Story Of The Day')
    cy
      .get('.story').find('.contentWrapper').find('.newsImage').should('have.attr', 'src').should('include', 'https://media.wired.com/photos/603ed4f4ca2d81b57ccfbdea/191:100/w_1280,c_limit/business_diversity_865962658.jpg')
    cy
      .get('.story').find('.titleWrapper').children('.storyTitle')
      .should('contain', "Black Tech Employees Rebel Against ‘Diversity Theater’")
    cy
      .get('.story').find('.dateAndLabel').children('.date')
      .should('contain', 'Mon Mar 08 2021')
    cy
      .get('.story').find('.dateAndLabel').children('.label')
      .should('have.length', 1)
    cy
      .get('.story').find('.descriptionWrapper').children('.description')
      .should('contain', "Companies pledged money and support for people of color. But some say they still face a hostile work environment for speaking out or simply doing their jobs.")
    cy
      .get('.story').find('.descriptionWrapper').children('.viewMore').should('contain', 'See Full Story')
  })

  it('Should have the whole article pop up in a new tab in your browser when the See Full Story link is clicked', () => {
    cy
      .get('.story').find('.descriptionWrapper').children('.viewMore').should('contain', 'See Full Story')
  })

  it('Should include 3 buttons in the nav button section', () => {
    cy
      .get('.story').find('.navBtns').children('.favorite', '.spillAgain', 'a[href*="/favorite-stories"]')
  })

  it('Should be able to favorite a story', () => {
    cy
      .get('.story').find('.favorite').click({ force : true })
    cy
      .get('.story').find('.favorite').should('have.attr', 'src').should('include', '/static/media/like.bf2e642b.png')
  })

  it('Should be able to unfavorite a story', () => {
    cy
      .get('.story').find('.favorite').click({ force : true })
    cy
      .get('.story').find('.favorite').should('have.attr', 'src').should('include', '/static/media/heart.c412cbae.png')
  })

  it('Should be able to generate a new random story', () => {
    cy
      .get('.story').find('.spillAgain').click()
    cy
      .get('.story').find('.titleWrapper').children('.storyTitle')
      .should('contain', "A glimpse inside the minds of tech’s DEI leaders")
  })
})

describe('positiviTEA. Favorites Page', () => {
  beforeEach(() => {
    cy.intercept('GET','/everything', {
        q: 'diversity',
        q: 'mindfulness',
        q: 'science',
        q: 'innovation',
        q: 'funny',
        q: 'national geographic',
        q: 'optimistic',
        q: 'social justice',
        q: 'art',
        q: 'technology',
        q: 'kindness',
        q: 'sustainability',
        q: 'space',
        fixture:'mockData.json',
        statusCode: 201,
      })
  })

  it('Should navigate to saved stories page and contain stories a user has saved', () => {
    cy
      .get('.story').find('.favorite').click({ force : true })
      .get('.story').find('.viewSaved').click()
      .get('.favorite-section').children('.cardAndDelete').should('have.length', 1)
    cy.url().should('include', 'favorite-stories')
  })

  it('Should be able to see full article in a new tab in the browser', () => {
    cy
      .get('.favorite-section').find('.more')
  })

  it('Should be able to delete a favorite from favorites page', () => {
    cy
      .get('.favorite-section').find('.remove').click()
    cy
      .get('.favorite-section').children('.cardAndDelete').should('have.length', 0)
  })
})

describe('Loading Page', () => {
  it('Should show a loading page when waiting for data to be retrieved from an outside source', () => {
    cy.intercept('GET','/everything', {
        q: 'diversity',
        q: 'mindfulness',
        q: 'science',
        q: 'innovation',
        q: 'funny',
        q: 'national geographic',
        q: 'optimistic',
        q: 'social justice',
        q: 'art',
        q: 'technology',
        q: 'kindness',
        q: 'sustainability',
        q: 'space',
        fixture:'mockData.json',
        statusCode: 201,
        delay: 7000
    })
      cy.visit('http://localhost:3000')
        .get('main').find('.spill-button').should('contain', 'Spill it..').click()
      cy.get('.loading').should('contain', 'Keep on Keepin on..')
  })
})

describe('404 Error Page', () => {
  it('Should render 404 error page', () => {
     cy.intercept('GET','/everything', {
        statusCode: 404
    })
    cy.visit('http://localhost:3000')
      .get('main').find('.spill-button').should('contain', 'Spill it..').click()
    cy
      .get('h2').should('contain', 'We are having issues getting information, please try again later!')
  })
})





