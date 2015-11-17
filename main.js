/** @global */
global.__base = __dirname;

/**
 * This is the main class
 * @class
 * @requires module:express
 * @requires module:multer
 * @requires module:fs
 * @requires module:./my_modules/TextFileHandler
 * @requires module:./my_modules/ZipFileHandler
 * @requires module:express
 */
var express = require('express'),
    multer = require('multer'),
    app = express(),
    fs = require('fs'),
    textHandler = require(__dirname + '/my_modules/TextFileHandler'),
    zipHandler = require(__dirname + '/my_modules/ZipFileHandler');

/**
 * Initialization of local variables
 */
var storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, __dirname + '/uploads/');
        },
        filename: function (req, file, cb) {
            cb(null, file.originalname.replace('.', '-' + Date.now() + '.'));
        }
    }),
    upload = multer({
        storage: storage
    });

/**
 * Handler for GET requests with the following route: "/"
 * @param {String} path
 * @param {function} A callback that receives: req {Object} and res {Object}
 */
/*app.get('/', function (req, res) {
    res.sendFile("index.html", {
        root: __dirname
    });
});*/
app.use(express.static(__dirname + '/public'));

/**
 * Handler for POST requests with the following route: "/wcc"
 * @param {String} path
 * @param {function} A middleware
 * @param {function} A callback that receives: req {Object} and res {Object}
 */
app.post('/wcc', [
  upload.fields([{
        name: 'myTextfile',
        maxCount: 1
    }]),
  function (req, res) {
        var file = (req.files && req.files.myTextfile && req.files.myTextfile[0]) ? req.files.myTextfile[0] : null,
            child, zip, returnBodyError = '<p>Error: The file couldn\'t be read in the server.</p>';

        if (file && file.originalname && file.originalname.indexOf('.txt') > -1) {
            textHandler.writeFileDetailsToRes(file, res);
        } else if (file && file.originalname && file.originalname.indexOf('.zip') > -1) {
            zipHandler.writeZipFileNamesToRes(file, res);
        } else {
            res.status(500).send(returnBodyError);
        }
}]);

/**
 * Start the server on port 8080
 * @param {number} port
 * @function
 */
app.listen(8080, function () {
    console.log("Working on port 8080");
});