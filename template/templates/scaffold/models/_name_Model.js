const mongoose = require('mongoose')
const <%= (name)[0].toUpperCase() + (name).slice(1) %> = mongoose.model('<%= (name)[0].toUpperCase() + (name).slice(1) %>')

const <%= (name)[0].toUpperCase() + (name).slice(1) %>Schema = new mongoose.Schema({

})

module.exports = mongoose.model(<%= (name)[0].toUpperCase() + (name).slice(1) %>, <%= (name)[0].toUpperCase() + (name).slice(1) %>Schema)
