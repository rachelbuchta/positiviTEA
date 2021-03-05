export const fetchQuotes = () => {
  return fetch('https://api.quotable.io/random?tags=inspirational')
    .then(response => {
      return response.json()
    })
    .catch(error => {
      console.log(error)
    })
}

