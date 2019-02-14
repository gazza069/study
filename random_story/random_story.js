var fs = require('fs');
var request = require('request');
var htmlparser = require('htmlparser');
var configFilename = './rss_feeds.txt';

function checkForkRSSFile() {
    fs.exists(configFilename, function(exists) {
        if(!exists)
            return next(new Error('Missing RSS file:' + configFilename));
        next(null, configFilename);
    });
}

function readRSSFile (configFilename) {
    fs.readFile(configFile, function(err,feedList) {
        if(err) return next(err);
        feedList = feedList.toString().replace(/^\s|\s+$/g, '').split("\n");
        var random = Math.floor(Math)
    })
}