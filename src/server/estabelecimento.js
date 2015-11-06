var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var estabelecimentoSchema = new Schema({
	username:  String,
	password: String
});

module.exports = mongoose.model('estabelecimentos', estabelecimentoSchema);;