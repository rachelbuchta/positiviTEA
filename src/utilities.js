export const fetchData = (url) => {
  return fetch(url)
}

export const randomizeKeywords = () => {
  const keyWords = ['mindfulness', 'science', 'innovation', 'funny', 'national geographic', 'optimistic', 'social justice', 'art', 'technology', 'kindness', 'sustainability', 'space', 'diversity']
  const chosenKeyword = generateRandomNumber(10)
  return keyWords[chosenKeyword]
}

export const generateRandomNumber = (num) => {
    return Math.floor(Math.random() * (num - 1)) + 1
}

export const handleFetchErrors = (response) => {
  if (response.status >= 400 && response.status < 500) {
    throw new Error("We are having issues getting information, please try again later!")
  }
  else if(response.status <= 500) {
    throw new Error("Our server seems to be having difficulties at this time, please try refreshing the page.")
  }
}

export const errorMessage = () => {
  return "We are having issues getting information, please try again later!"
}


