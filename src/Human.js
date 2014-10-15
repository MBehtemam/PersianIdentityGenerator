var males = require('../repository/human-male.json');
var humanLastName = require('../repository/human-lastname.json');
var _ = require('underscore');
exports.male = function(){
	return males[_.random(0,males.length-1)].textFa;
}
exports.lastName = function(){
	return humanLastName[_.random(0,humanLastName.length-1)].textFa;
}
exports.age = function(){
	return _.random(1,99);
}