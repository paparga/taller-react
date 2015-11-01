const form = require('./modules/form')

exports.beaches = [['beaches'], (beaches) => {
  return beaches.toList()
  }
]

exports.oneBeach = (id) => ['beaches', id]

exports.currentBeach = [['beaches'],['currentValues', 'beach'],
  (beaches,id) => beaches.get(id)
]

exports.isEditingBeach = ['currentValues','editingBeach']

exports.editBeachFormValues = form.getters.currentValues('beach_edit_form')
