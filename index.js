
const routes = require('./routes')
const Address = require("./models");
const app = require('express')()
const port = 3000

let server = routes(app, Address).listen(port, () => console.log(`Example app listening on port ${port}!`))
server.Address = Address
module.exports = server;
