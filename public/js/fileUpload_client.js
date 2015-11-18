/**
 * This module is used in the client side to handle and send files to the server
 * @module FileHandlerModule
 * @exports handleFileSelect
 * @exports sendFile
 */
var FileHandlerModule = (function () {
    /** @private */
    var _textFile = null,
        _zipFile = null,

        /** @protected */
        FORM_FIELD = 'uploadedFileField',

        /** @protected */
        addTextFile = function (file) {
            if (file)
                _textFile = file;
        },

        /** @protected */
        getTextFile = function () {
            return _textFile;
        },

        /** @protected */
        addZipFile = function (file) {
            if (file)
                _zipFile = file;
        },

        /** @protected */
        getZipFile = function () {
            return _zipFile;
        };

    return {

        /**
         * Used when either a text or zip files are selected
         * NOTE: fileListObj is "like" an array but not actually an array
         * @param {Object} evt - Native object sent when a file has been selected with the file-browser
         */
        handleFileSelect: function (evt) {
            var fileListObj = evt.target.files,
                type = "";

            if (!fileListObj) {
                alert('No file has been selected');
                return;
            }

            type = fileListObj[0] && fileListObj[0].type;

            switch (type) {

            case "text/plain":
                addTextFile(fileListObj[0]);
                break;
            case "application/x-zip-compressed":
                addZipFile(fileListObj[0]);
                break;
            }

        },

        /**
         * Used to send either a text or zip files to the server
         * @param {string} type - The type of the file to send (either 'text' or 'zip')
         */
        sendFile: function (type) {
            var xhr = new XMLHttpRequest(),
                formData = new FormData(),
                file = type === 'text' ? getTextFile() : type === 'zip' ? getZipFile() : null,
                hostLocation = window.location && window.location.origin;

            if (!file) {
                alert('There is no file to send!');
                return;
            } else if (typeof hostLocation !== 'string') {
                alert('The server location could not be determined');
                return;
            }

            formData.append(FORM_FIELD, file, file.name);
            xhr.open("POST", hostLocation + "/wcc", true);
            xhr.onload = function (resp) {
                var cont = '<p>The file has been uploaded</p>';
                if (xhr.status === 200) {
                    document.getElementById('results').innerHTML = cont + xhr.response;
                } else {
                    alert('An error occurred while uploading the file!');
                }
            };
            xhr.send(formData);
        }
    };
})();