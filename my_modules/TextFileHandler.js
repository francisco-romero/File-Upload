/**
 * A module that shouts hello!
 * @module TextFileHandler
 */

/** @requires module:child_process */
var exec = require('child_process').exec;

/** Function that writes the file details to the res object and sends it back to the client. */
exports.writeFileDetailsToRes = function (file, res) {
    var returnBody = '<p>Zip File successfully uploaded</p>',
        child = exec("wc " + file.path +
            "| awk {'print \"#lines: \"$1\" | #words: \"$2\" | #bytes: \"$3'}",
            function (err, stdout) {
                if (err) {
                    res.status(500).send('<p>An error occurred while reading the file details.</p>');
                } else {
                    var resp = stdout.trim() + " | " + file.originalname;
                    res.status(200).send(returnBody + '<p>' + resp + '</p>');
                }
            });
};