const Nuclear = require('nuclear-js')
const flux = require('./flux')

const beaches = [
  { id: '1', name: "Reñaca", place:"V Región",
    img:"https://c1.staticflickr.com/3/2782/4502745583_1c3267a12e_b.jpg"},
  { id: '2', name: "Anakena", place:"Isla de Pascua",
    img:"http://www.isladepascua.travel/wp-content/uploads/2012/03/playa-chile-vacaciones-isla-de-pascua.jpg"},
  { id: '3', name: "Pichilemu", place:"VI Región",
    img:"http://chile.voyhoy.com/blog/wp-content/uploads/surfista-pichilemu-voyhoy-2.jpg"},
  { id: '4', name: "La Virgen", place:"III Región",
    img:"http://contenidos.playalavirgen.cl/notas/galerias/fotos/galeria35_270.jpg"},
  { id: '5', name: "Zapallar", place:"V Región",
    img:"http://www.elmostrador.cl/wp-content/uploads/2015/01/Zapallar_816x544.jpg"},
  { id: '6', name: "Pan de Azucar", place:"III Región",
    img:"http://farm5.static.flickr.com/4031/4474776248_396318f77a.jpg"},
  { id: '7', name: "Playa Arena Gruesa", place:"X Región",
    img:"http://www.plataformaurbana.cl/wp-content/uploads/2014/02/1392823726_playa_arena_gruesa-528x351.jpg"},
]

const beachStore = new Nuclear.Store({
  getInitialState:() =>{
    return Nuclear.toImmutable(beaches)
  },

  initialize: () => {}
})

const counterStore = new Nuclear.Store({
  getInitialState:() =>{
    return Nuclear.toImmutable({})
  },

  initialize: function(){
    this.on('aumentar-contador', (state,id)=>{
      if (state.has(id)) {
        return state.updateIn([id], count => count + 1)
      }else {
        return state.setIn([id],1)
      }
    })
    this.on('disminuir-contador', (state,id)=>{
      if (state.has(id)) {
        return (state.get(id) === 0)
                ? state
                : state.updateIn([id], count => count - 1)
      }else {
        return state
      }
    })
  }
})

flux.registerStores({beaches: beachStore, counters: counterStore})
