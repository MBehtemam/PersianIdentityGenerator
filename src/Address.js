var provinces = require('../repository/address-provinces.json');
var city = require('../repository/address-city.json');
var _ = require('underscore');
exports.provinces = function(){
	 return provinces[_.random(0,provinces.length-1)].textFa;
}
exports.city = function(){
	 return city[_.random(0,city.length-1)].textFa;
}