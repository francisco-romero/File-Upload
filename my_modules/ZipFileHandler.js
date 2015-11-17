/**
 * A module that shouts hello!
 * @module TextFileHandler
 */

/** @requires module:adm-zip */
var AdmZip = require('adm-zip');

/** Function that writes the name of all files present in the zip file, and send this back to the client. */
exports.writeZipFileNamesToRes = function (file, res) {
    var zip = new AdmZip(__base + '/uploads/' + file.filename),
        zipEntries = zip ? zip.getEntries() : null,
        returnBody = '<p>Zip File successfully uploaded</p>';
    if (Array.isArray(zipEntries)) {
        returnBody += '<p>The uploaded zip file contains:</p>';
        zipEntries.forEach(function (zipEntry) {
            //console.log(zipEntry.toString());
            returnBody += '<p>' + zipEntry.entryName + '</p>';
            //console.log(zipEntry.data.toString('utf8'));
        });
        res.status(200).send(returnBody);
    } else {
        res.status(500).send('<p>An error occurred while reading the zip file.</p>');
    }
};