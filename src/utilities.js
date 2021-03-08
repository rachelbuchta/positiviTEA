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
  return fetch(`https://newsapi.org/v2/everything?pageSize=3&sortBy=relevancy&q=${randomizeKeywords()}&apiKey=32df8cd3a1594f62ae8ccce0e9281e60`)
    .then(response => {
      return response.json()
    })
    .catch(error => {
      console.log(error)
    })
}

export const randomizeKeywords = () => {
  const keyWords = ['mindfulness', 'science', 'innovation', 'funny', 'national geographic', 'optimistic', 'social justice', 'art', 'technology', 'kindness', 'sustainability', 'space', 'diversity']
  const chosenKeyword = generateRandomNumber(10)
  console.log(keyWords[chosenKeyword])
  return keyWords[chosenKeyword]
}

export const generateRandomNumber = (num) => {
    return Math.floor(Math.random() * (num - 1)) + 1
  }


