const https = require('https');
/*
 * Complete the function below.
 * Use console.log to print the result, you should not return from the function.
 * Base url: https://jsonmock.hackerrank.com/api/movies/search/?Title=
 */

const BASE_URL = "https://jsonmock.hackerrank.com/api/movies/search/"

function convertObjectToGetParameters(obj) {
  return Object.entries(obj).map(([key, value]) => `${key}=${value}`).join('&')
}

function httpsAsyncWrapper(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      res.setEncoding('utf8')
      res.on('data', (d) => {
        resolve(JSON.parse(d))
      })


    }).on('error', reject)
  })
}

async function loadMoviesByQuery(query, page = 1, titles = []) {
  const parameters = convertObjectToGetParameters({...query, page})
  const res = await httpsAsyncWrapper(`${BASE_URL}?${parameters}`)

  if (res.total_pages > page) {
    return await loadMoviesByQuery(query, page + 1, [...titles, ...res.data])
  }

  return [...titles, ...res.data]
}

async function getMovieTitles(substr) {
  const movies = await loadMoviesByQuery({Title: substr})

  return movies.map(({Title}) => Title).sort()
}


getMovieTitles('spiderman').then(console.log)