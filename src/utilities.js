export const fetchData = (url) => {
  return fetch(url)
}

export const randomizeKeywords = () => {
  const keyWords = ['mindfulness', 'science', 'innovation', 'funny', 'national geographic', 'optimistic', 'social justice', 'art', 'technology', 'kindness', 'sustainability', 'space', 'diversity']
  const chosenKeyword = generateRandomNumber(13)
  console.log(keyWords[chosenKeyword])
  return keyWords[chosenKeyword]
}

export const generateRandomNumber = (num) => {
    return Math.floor(Math.random() * (num - 1)) + 1
}

export const errorMessage = () => {
  return "We are having issues getting information, please try again later!"
}

export const quotePath = () => {
  return 'https://api.quotable.io/random?maxLength=120&tags=inspirational'
}

export const newsPath = (randomKeyWord) => {
  return `https://newsapi.org/v2/everything?q=${randomKeyWord}&apiKey=76125fd4642a4e4c94a43f114bac24a5`
}


