var _ = require('underscore');


console.log(__dirname  + '\\environments\\' + process.env.NODE_ENV + '.json');

module.exports = _.extend(
    require(__dirname + '\\environments\\' + process.env.NODE_ENV + '.json') || {})