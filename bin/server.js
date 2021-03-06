require('babel/register');

const config = require('../config');
const server = require('../server/app');
const debug  = require('debug')('kit:bin:server');

const host = config.get('server_host');
const port = config.get('server_port');

server.listen(port, host, function () {
  debug('Server is now running at ' + host + ':' + port + '.');
});
