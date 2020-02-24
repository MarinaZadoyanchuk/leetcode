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

async function loadMoviesByQuery(query, cb) {
  let page = 1
  let totalPages = 0

  do {
    const parameters = convertObjectToGetParameters({...query, page})
    const res = await httpsAsyncWrapper(`${BASE_URL}?${parameters}`)
    cb(res.data)
    totalPages = res.total_pages
    page++
  } while(totalPages >= page)
}

async function getMovieTitles(substr) {
  const titles = []
  await loadMoviesByQuery(
      {Title: substr},
      (data) => {
        titles.push(...data.map(({Title}) => Title))
  })

  return titles.sort()
}


getMovieTitles('spiderman').then(console.log)