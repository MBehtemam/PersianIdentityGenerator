var Optimist = require('optimist');
var Human = require('./src/Human.js');
var excel = require('json2xls');
var fs = require('fs');
var _ = require('underscore');

var argv = Optimist.argv;

var output = [];

for (var i = 0; i < argv.count; i++) {
    output.push(new Object());
}
// adding man first name
if (argv.male && typeof argv.male == 'boolean') {
    output.forEach(function(obj) {
        obj.firstName = Human.male();
    });
} else if (argv.male && typeof argv.male == 'number') {
    for (var i = 0; i < argv.male; i++) {
        output[i].firstName = Human.male();
    }
}

//adding last name
if (argv.lastName && typeof argv.lastName == 'boolean') {
    output.forEach(function(obj) {
        obj.lastName = Human.lastName();
    });
} else if (argv.lastName && typeof argv.lastName == 'number') {
    for (var i = 0; i < argv.lastName; i++) {
        output[i].lastName = Human.lastName();
    }
}

//adding age
if (argv.age && typeof argv.age == 'boolean') {
    output.forEach(function(obj) {
        obj.age = Human.age();
    });
} else if (argv.age && typeof argv.age == 'number') {
    for (var i = 0; i < argv.age; i++) {
        output[i].age = Human.age();
    }
}

switch (argv.output) {
    case 'excel':
        var fileName = argv.fileName || 'data';
        fs.writeFile(fileName + '.xlsx', excel(output), 'binary');
        break;
    case 'json':
        var fileName = argv.fileName || 'data';
        fs.writeFile(fileName + '.json', JSON.stringify(output), 'binary');
        break;
    default:
        var fileName = argv.fileName || 'data';
        fs.writeFile(fileName + '.json', JSON.stringify(output), 'binary');
}




console.log(output);
