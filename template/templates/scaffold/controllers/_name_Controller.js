require('dotenv').config()

const mongoose = require('mongoose')
const <%= (name)[0].toUpperCase() + (name).slice(1) %> = mongoose.model('<%= (name)[0].toUpperCase() + (name).slice(1) %>')

exports.index = (req, res) => {}
exports.show = (req, res) => {}
exports.new = (req, res) => {}
exports.create = (req, res) => {}
exports.edit = (req, res) => {}
exports.update = (req, res) => {}
exports.destroy = (req, res) => {}
