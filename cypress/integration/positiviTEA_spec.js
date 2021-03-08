describe('positiviTEA. Landing Page', () => {
  before(() => {
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
  before(() => {
    cy.visit('http://localhost:3000')
      cy.fixture('quoteData.json')
        .then((quote) => {
          console.log(quote)
          cy.intercept('GET', 'https://api.quotable.io/random?tags=inspirational', {
            statusCode: 201,
            body: quote
          })
        })
      cy.fixture('mockData.json')
        .then((news) => {
          console.log(news.articles[0])
          cy.intercept('GET', `https://newsapi.org/v2/everything?pageSize=3&sortBy=relevancy&q=diversity&apiKey=32df8cd3a1594f62ae8ccce0e9281e60`, {
            statusCode: 201,
            body: news.articles
     })
  })
})

  it('Should be able to click spill button and be navigated to story of the day page with a header, main content section and nav buttons', () => {
    cy
      .get('main').find('.spill-button').should('contain', 'Spill it..').click()
    cy
      .get('.story').children('.sod', '.contentWrapper', '.navBtns')
    cy.url().should('include', 'story')
  })

  it('Should have a header that includes a random quote and author', () => {
    cy
      .get('header').children('.homeButton', '.quoteWrapper')
    cy
      .get('.homeButton').find('.link').should('contain', 'positiviTEA.')
    cy
      .get('.quoteWrapper').find('.quote').should('contain', 'In the middle of every difficulty lies opportunity.')
      .find('.author').should('contain', 'Albert Einstein')
  })

  it('Should navigate back to main page when positiviTEA link is clicked in the header', () => {
    cy
      .get('header').children('.homeButton').find('.link').click()
    cy.url().should('include', 'story')
  })

  it('Should have a header, image, title, date, label, description and link to the full story in the main content section', () => {
    cy
      .get('.story').find('.sod').should('contain', 'Story Of The Day')
    cy
      .get('.story').find('.contentWrapper').children('.imgWrapper').should('have.attr', 'src').should('include', 'https://s.yimg.com/uu/api/res/1.2/kh1nr_IBwv7ZtAfRzLlwQQ--~B/aD00NDcyO3c9Nzk1MjthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/os/creatr-uploaded-images/2021-02/71ea0fe0-79f7-11eb-a732-012e236670a5.cf.jpg')
    cy
      .get('.story').find('titleWrapper').children('.storyTitle').should('contain', 'Scientists sequence 64 human genomes to better reflect genetic diversity')
    cy
      .get('.story').find('.dateAndLabel').children('.date').should('contain', 'Sun Feb 28 2021')
    cy
      .get('.story').find('.dateAndLabel').children('.label').should('contain', 'diversity')
    cy
      .get('.story').find('.descriptionWrapper').children('.description').should('contain', "The Human Genome Project shed light on our species in 2001, but it was a patchwork of different humans' genes that didn't really reflect humanity's genetic makeup. Flash forward 20 years, however, and science is taking a significant leap forward. Researchers …")
    cy
      .get('.story').find('.descriptionWrapper').children('.viewMore').should('contain', 'See Full Story')
  })

  it('Should have the whole article pop up in a new tab in your browser when the See Full Story link is clicked', () => {
    cy
      .get('.story').find('.descriptionWrapper').children('.viewMore').should('contain', 'See Full Story').click()
    cy.visit('https://www.engadget.com/sequence-64-human-genomes-genetic-diversity-195605887.html')
  })

  it('Should include 3 buttons in the nav button section', () => {
    cy
      .get('.story').find('.navBtns').should('have.length', 3)
  })

  it('Should be able to favorite a story', () => {
    cy
      .get('.story').find('.favorite').should('have.attr', 'src').should('include', '/static/media/heart.c412cbae.png').click()
    cy
      .get('.story').find('.favorite').should('have.attr', 'src').should('include', '/static/media/like.bf2e642b.png')
  })

  it('Should be able to unfavorite a story', () => {
    cy
      .get('.story').find('.favorite').should('have.attr', 'src').should('include', '/static/media/like.bf2e642b.png').click()
    cy
      .get('.story').find('.favorite').should('have.attr', 'src').should('include', '/static/media/heart.c412cbae.png')
  })

  it('Should be able to generate a new random story', () => {
    cy
      .get('.story').find('.spillAgain').click()
    cy
      .get('.story').find('.titleWrapper').children('storyTitle').should('contain', 'Hear from Uber, Facebook and Netflix about diversity, equity and inclusion tomorrow at TC Sessions: Justice')
  })

  it('Should navigate to saved stories page', () => {
    cy
      .get('.story').find('.viewSaved').click()
    cy.url().should('include', 'favorite-stories')
  })
})

describe('positiviTEA. Favorites Page', () => {
  before(() => {
    cy.visit('http://localhost:3000')
    cy
      .get('.story').find('.viewSaved').click()
    cy.url().should('include', 'favorite-stories')
  })
  
  it('Should contain stories a user has saved', () => {
    cy
      .get('.favorite-section').children('.cardAndDelete').should('have.length', 1)
    cy
      .get('.favorite-section').find('.card').children('.savedTitle').should('contain', 'Scientists sequence 64 human genomes to better reflect genetic diversity')
  })

  it('Should be able to see full article in a new tab in the browser', () => {
    cy
      .get('.favorite-section').find('.more').click()
    cy.visit('https://www.engadget.com/sequence-64-human-genomes-genetic-diversity-195605887.html')
  })

  it('Should be able to delete a favorite from favorites page', () => {
    cy
      .get('.favorite-section').find('.remove').click()
    cy
      .get('.favorite-section').children('.cardAndDelete').should('have.length', 0)
  })
})





