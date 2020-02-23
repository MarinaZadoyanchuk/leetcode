import promiseAll from './index'
import {expect} from 'chai'

describe.only('custom promise all', () => {
  it('empty array', async () => {
    const res = await promiseAll([])
    expect(res).to.eql([])
  })

  it('primitive values', async () => {
    const res = await promiseAll([1, 2, 3, 4])
    expect(res).to.eql([1, 2, 3, 4])
  })

  it('mix data', async () => {
    const p = [
      Promise.resolve(1),
      2,
      'third',
      new Promise((resolve, reject) => {
        setTimeout(() => resolve('first'), 200)
      }),
      new Promise((resolve, reject) => {
        setTimeout(() => resolve('second'), 100)
      }),
    ]

    const res = await promiseAll(p)
    expect(res).to.eql([1, 2, 'third', 'first', 'second'])
  })

  it('with exception', (done) => {
    const p = [
      Promise.resolve(1),
      2,
      'third',
      new Promise((resolve, reject) => {
        reject(new Error('reject promise'))
      }),
      new Promise((resolve, reject) => {
        setTimeout(() => resolve('second'), 100)
      }),
    ]

    promiseAll(p).then(console.log).catch(error => {
      expect(error.toString()).eql('Error: reject promise')
      done()
    })
  })

  it('promise all of string', async () => {
    const res = await promiseAll('abcd')

    expect(res).to.eql(['a', 'b', 'c', 'd'])
  })
})