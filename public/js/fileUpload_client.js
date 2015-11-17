var FileHandlerModule = (function () {
    var _files = [];


    return {
        addFile: function (file) {
            if (file)
                _files.push(file);
        },

        getFiles: function () {
            return (_files.length > 0) ? _files : null;
        },

        handleFileSelect: function (evt) {
            var files = evt.target.files,
                output = [];

            if (!files)
                return;

            for (var i = 0, f; f = files[i]; i++) {
                output.push('<li><strong>', escape(f.name), '</strong> (', f.type || 'n/a', ') - ',
                    f.size, ' bytes, last modified: ',
                    f.lastModifiedDate.toLocaleDateString(), '</li>');
                FileHandlerModule.addFile(f);
            }
            document.getElementById('list').innerHTML = '<ul>' + output.join('') + '</ul>';
        },

        sendZipFile: function () {
            var xhr = new XMLHttpRequest(),
                formData = new FormData(),
                file = FileHandlerModule.getFiles()[0];

            formData.append('fileses',file,file.name);
            xhr.open("POST", "http://lw5-f2z-dsy:3000/uploadFile", true);
            xhr.onload = function () {
                if (xhr.status === 200) {
                    document.getElementById('list').innerHTML = '<ul>The file has been uploaded</ul>'
                } else {
                    alert('An error occurred!');
                }
            };
            xhr.send(formData);
        }
    };
})();