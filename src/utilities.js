export const fetchQuotes = () => {
  return fetch('https://api.quotable.io/random?tags=inspirational')
    .then(response => {
      return response.json()
    })
    .catch(error => {
      console.log(error)
    })
}

export const fetchNews = () => {
  return fetch(`https://newsapi.org/v2/everything?q=${randomizeKeywords()}&apiKey=38cf827884e446c4896980655d738a61`)
    .then(response => {
      return response.json()
    })
    .catch(error => {
      console.log(error)
    })
}

export const randomizeKeywords = () => {
  const keyWords = ['mindfullness', 'science', 'innovation', 'funny', 'national geographic', 'optimistic', 'social justice', 'art']
  const chosenKeyword = generateRandomNumber(8)
  return keyWords[chosenKeyword]
}

export const generateRandomNumber = (num) => {
    return Math.floor(Math.random() * (num - 1)) + 1
  }


