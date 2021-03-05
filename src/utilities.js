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
  return fetch('https://newsapi.org/v2/everything?q=science&apiKey=38cf827884e446c4896980655d738a61')
    .then(response => {
      return response.json()
    })
    .catch(error => {
      console.log(error)
    })
}

