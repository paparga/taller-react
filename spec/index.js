const {expect} = require('chai')
const sinon = require('sinon')
const Nuclear = require('nuclear-js')
const flux = require('../app/flux')
const getters = require('../app/getters')
const actions = require('../app/actions')
const stores = require('../app/stores')
const actionTypes = require('../app/action-types')
const beachesApi = require('../app/utils/beaches-api')

let mockBeaches = [
  { id: '1', name: "Reñaca", place:"V Región", "count": 0,
    img:"https://c1.staticflickr.com/3/2782/4502745583_1c3267a12e_b.jpg"},
  { id: '2', name: "Anakena", place:"Isla de Pascua", "count": 0,
    img:"http://www.isladepascua.travel/wp-content/uploads/2012/03/playa-chile-vacaciones-isla-de-pascua.jpg"},
]

describe('Taller de React Flux', function(){
  describe('getters', function() {
    beforeEach(() => {
      flux.reset()

      let fetchBeachesPromise = new Promise((resolve, reject) => {
        resolve(mockBeaches)
      })

      sinon.stub(beachesApi, 'fetchAll').returns(fetchBeachesPromise)
    })

    afterEach(() => {
      beachesApi.fetchAll.restore()
    })

    it.skip('#beaches', function() {
      expect(true).to.be.false
    })

    it('#oneBeach', function() {
      actions.fetchAllBeaches()
      flux.observe(getters.oneBeach('1'), (value)=>{
        let temp = Nuclear.toJS(value)
        expect(temp).to.eql(
          { id: '1', name: "Reñaca", place:"V Región", "count": 0,
            img:"https://c1.staticflickr.com/3/2782/4502745583_1c3267a12e_b.jpg"}
        )
      })
    })
  })

  describe('actions', function() {
    beforeEach(() => {
      flux.reset()

      let fetchBeachesPromise = new Promise((resolve, reject) => {
        resolve(mockBeaches)
      })

      sinon.stub(beachesApi, 'fetchAll').returns(fetchBeachesPromise)
    })

    afterEach(() => {
      beachesApi.fetchAll.restore()
    })

    it('#fetchAllBeaches', function() {
      actions.fetchAllBeaches()
      flux.observe(getters.beaches, (value)=>{
        let temp = Nuclear.toJS(value)
        expect(temp).to.eql([
          { id: '1', name: "Reñaca", place:"V Región", "count": 0,
            img:"https://c1.staticflickr.com/3/2782/4502745583_1c3267a12e_b.jpg"},
          { id: '2', name: "Anakena", place:"Isla de Pascua", "count": 0,
            img:"http://www.isladepascua.travel/wp-content/uploads/2012/03/playa-chile-vacaciones-isla-de-pascua.jpg"},
        ])
      })
    })
  })

  describe('actionTypes', function() {
    beforeEach(() => {
      flux.reset()
    })

    afterEach(() => {
    })

    describe('beaches', function() {
      it('FETCH_ALL_BEACHES', function() {
        flux.dispatch(actionTypes.FETCH_ALL_BEACHES,mockBeaches)
        flux.observe(['beaches'], (value)=>{
          let temp = Nuclear.toJS(value)
          expect(temp).to.eql({
            '1': { id: '1', name: "Reñaca", place:"V Región", "count": 0,
              img:"https://c1.staticflickr.com/3/2782/4502745583_1c3267a12e_b.jpg"},
            '2': { id: '2', name: "Anakena", place:"Isla de Pascua", "count": 0,
              img:"http://www.isladepascua.travel/wp-content/uploads/2012/03/playa-chile-vacaciones-isla-de-pascua.jpg"},
          })
        })
      })
      it('AUMENTAR_CONTADOR', function() {
        flux.dispatch(actionTypes.FETCH_ALL_BEACHES,mockBeaches)
        flux.dispatch(actionTypes.AUMENTAR_CONTADOR, '1')
        flux.observe(['beaches','1'], (value)=>{
          let temp = Nuclear.toJS(value)
          expect(temp.count).to.eql(1)
        })
      })
    })
  })

})
