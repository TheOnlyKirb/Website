module.exports = function (webserver) {
    const fs = require('fs')
    function getDirectories(path) {
        return fs.readdirSync(path).filter(function (file) {
            return fs.statSync(path + '/' + file).isDirectory();
        });
    }
    function getFiles(path) {
        return fs.readdirSync(path).filter(function (file) {
            return fs.statSync(path + '/' + file).isFile()
        });
    }
    getDirectories("main/endpoints/paths/").forEach(function (name) {
        getFiles("main/endpoints/paths/" + name).forEach(function (endpoint) {
            webserver.get(`/${name}/:${endpoint.split(".")[0]}`, function (req, res) {
                require(`./paths/${name}/${endpoint}`)(req, res)
            });
        })
    });
    // homepage/main page/route is an exception!
    webserver.get("/", function (req, res) {
        if(!req.query.v || req.query.v !== "0.1") return res.redirect("/?v=0.1")
        res.render("home.ejs")
    })
}