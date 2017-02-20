/**
 * Created by gurushantu on 08-02-2017.
 */
var app, bodyParser, cookieParser, dist, express, http, path, server;
express = require("express");
http = require('http');
path = require("path");
require('babel-register');
//require("babel/register");
dist = path.join(__dirname, '/../dist');
app = express();
app.use(express["static"](dist));
app.set("port", process.env.PORT || 3003);

server = http.createServer(app);

server.listen(app.get("port"), function() {
    return console.log("Express server listening on port " + server.address().port);
});