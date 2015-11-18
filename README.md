### Table of contents

[TOC]

Basic File Uploader
===================


This is a small proto build using node/express js. The main idea is to realize the dimensions and complexity that are involved in a project using these technologies. 
The usage of this application is quite straight forward: the user is able to upload either a text or a zip file to the server. When the operation is successfully completed, the server sends back, according to the case, either information about the uploaded file or the list of files contained in the uploaded zip file.
The application as a whole is composed by the following parts:
> - Backend side: It is built on node js. Additionally, it also uses express js, that is a middleware that facilitates the implementation of server hosting either static files or more complex things such as web APIs (web services). Node js has many available modules that can be imported to perform specific tasks. These are declared in the package.json file
> - Frontend side: It is built only on native technologies: js/css/html. It defines a single module called "fileUpload_client.js", that is in charge of managing the interactions with the user, locally storing the selected files and sending them to the server.

Some important node modules that are used in the backend:
> - Gulp and Gulp-Sass: Used to create a very simple workflow that compiles the sass code (contained in the .scss file) to generate the css code that will be sent to the client side.
> - Node-Inspector: Used to debug in the server side. 
> - Multer: Used to parse or process the file that is received as formData.
> - Adm-zip: Used to be able to read the zip file contents.

Finally, the code contains jsdoc annotations to automate the documentation generation.


----------


How to run the app from the server
------------------------------------------

> - It is required to have node v0.12.0 installed in the machine. 

> **Note:**
> 
> The latest mature version is v4.2.2, however, I found problems when using the Node-Inspector debugger, so I had to downgrade to the v0.12.0 version, that works fine and is known to be stable and quite used.

> - From the command line and from the root of the project (where the package.json file is), do: 
> **npm install**
> this "I think :p" installs all the dependencies that are stated in the package.json file. If this doesn't work, you'll need to install them one by one:
> npm install adm-zip
> npm install express
> npm install multer
> npm install gulp
> npm install gulp-sass --save-dev
> - Additionally if willing to debug add the node-inspector
> npm install -g node-inspector
> - And if willing to generate the doc add the jsdoc module:
> npm install -g jsdoc

Once node and its modules are installed, you the following from the command line:

| Action           | Command                        |
 ----------------- | ------------------------------ |
| Run the app      | node main.js            |
| Run the app in debug mode| `node-debug main.js`            |
| Compile Sass   | gulp sass |
| Compile Sass when scss is changed   | gulp sass:watch |
| Generate the doc  | jsdoc -d doc main.js |


How to run the app from the client
------------------------------------------

> - http://[hostmachine]:8080/


Please note
--------------
Many of the things need to be improved:
> - Unify the sass compilation, add minification, launch the application and update browser with the same command.
> - UI needs to be improved. This is just a basic skeleton.
> - The use of Sass is pretty basic, but on the code the following is illustrated:
>   - Sass allows to structure css in a "tree format" that emulates the dom structure. This makes easier to visualize the style code in the scss file
>   - Variables and mixins can be reused wherever and as many times as required. This decreases the code size and facilitates maintenance (only need to make changes in one place)
> - The jsdoc annotations are not very well used.
