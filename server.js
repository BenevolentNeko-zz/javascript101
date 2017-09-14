const Koa = require('koa');
const serve = require('koa-static');

const server = new Koa();
server.use(serve('.'));

server.listen(3001);

console.log('listening on port 3001')