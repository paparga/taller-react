const {expect} = require('chai')
const sinon = require('sinon')
const Nuclear = require('nuclear-js')
const flux = require('../app/flux')
const getters = require('../app/getters')
const actions = require('../app/actions')
const stores = require('../app/stores')

const beachesApi = require('../app/utils/beaches-api')

let mockBeaches = [
  { id: '1', name: "Reñaca", place:"V Región", "count": 0,
    img:"https://c1.staticflickr.com/3/2782/4502745583_1c3267a12e_b.jpg"},
  { id: '2', name: "Anakena", place:"Isla de Pascua", "count": 0,
    img:"http://www.isladepascua.travel/wp-content/uploads/2012/03/playa-chile-vacaciones-isla-de-pascua.jpg"},
]

describe('Taller React/Flux', () => {
  afterEach(() => {
    flux.reset()
  })

  describe('actions', () => {

    describe('#fetchBeaches', () => {
      beforeEach(() => {
        let fetchBeachesPromise = new Promise((resolve, reject) => {
          resolve(mockBeaches)
        })

        sinon.stub(beachesApi, 'fetchAll').returns(fetchBeachesPromise)
      })

      afterEach(() => {
        beachesApi.fetchAll.restore()
      })

      it('Deberia cargar las playas', (done) => {
        actions.fetchBeaches()
        flux.observe(getters.beaches,(value)=>{
          let beachesMap = Nuclear.toJS(value)
          expect(beachesMap).to.eql([
            { id: '1', name: "Reñaca", place:"V Región", "count": 0,
              img:"https://c1.staticflickr.com/3/2782/4502745583_1c3267a12e_b.jpg"},
            { id: '2', name: "Anakena", place:"Isla de Pascua", "count": 0,
              img:"http://www.isladepascua.travel/wp-content/uploads/2012/03/playa-chile-vacaciones-isla-de-pascua.jpg"},
          ])
          done()
        })

      })
    })
  })

  describe('getters', () => {
    describe('#oneBeach', () => {
      beforeEach(() => {
        flux.reset()
        let fetchBeachesPromise = new Promise((resolve, reject) => {
          resolve(mockBeaches)
        })
        sinon.stub(beachesApi, 'fetchAll').returns(fetchBeachesPromise)
        actions.fetchBeaches()

      })

      afterEach(() => {
        beachesApi.fetchAll.restore()
      })

      it('Deberia traer una playa', (done) => {
        flux.observe(getters.oneBeach('1'),(value)=>{
          let beach = Nuclear.toJS(value)
          expect(beach).to.eql(
            { id: '1', name: "Reñaca", place:"V Región", "count": 0,
            img:"https://c1.staticflickr.com/3/2782/4502745583_1c3267a12e_b.jpg"})
          done()
        })
      })
    })
  })
})
