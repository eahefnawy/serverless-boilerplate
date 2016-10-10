'use strict';

module.exports.run = function (handler, event, context) {
  var callback = function (err, result) {
    if (err) {
      console.log('Error: ' + err);
      process.exit(-1);
    } else {
      if (result) {
        console.log(JSON.stringify(result, null, 4));
        console.log('');
      }
      process.exit(0);
    }
  };

  handler(event, context, callback);
};