const express = require("express")
const fs = require("fs")
const webserver = express()
const path = require("path")
const server = webserver.listen(7500)
const bodyParser = require("body-parser");

// Some config things
webserver.set('trust proxy', 1);
webserver.set('view engine', 'ejs');
webserver.set('views', path.join(__dirname, '/main/views'));
// serve css statically

webserver.use('/resources', express.static(path.join(__dirname, '/main/resources')))
webserver.use('/media', express.static(path.join(__dirname, '/main/media')))

// More config

// yes yes this is deprecated, ill fix it later

webserver.use(bodyParser.text());
webserver.use(bodyParser.json());
webserver.use(bodyParser.urlencoded({ extended: true }));

// Load Routes/Endpoints
require("./main/endpoints/base.js")(webserver)
