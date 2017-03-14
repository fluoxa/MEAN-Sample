let util = require('util');

module.exports = {

  getUrl : function (schema, host, port, path) {

    let portString = '';

    if(port) {
      portString = ':' + port;
    }

    return util.format('%s://%s%s/%s', schema, host, portString, path);
  }
};
