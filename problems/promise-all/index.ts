export default function promiseAll(promises: Iterable<any>): Promise<Array<any>> {
  const res = []
  const arrayOfPromises = [...promises]
  let pending = arrayOfPromises.length

  return new Promise((resolve, reject) => {
    if (arrayOfPromises.length === 0) {
      return resolve([])
    }

    for(let i = 0; i < arrayOfPromises.length; i++) {
      const p = arrayOfPromises[i]

      Promise.resolve(p)
        .then((pRes) => {
          res[i] = pRes
          if (--pending === 0) {
            return resolve(res)
          }
        })
        .catch((error) => {
          reject(error)
        })
    }
  })
}