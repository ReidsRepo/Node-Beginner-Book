'use strict';


// first version
// var http = require('http');

// http.createServer(function(request, response) {
//   response.writeHead(200, {'Content_Type': 'text/plain'});
//   response.write('Hello World');
//   response.end();
// }).listen(8888);


//second version
// var http = require('http');

// function onRequest(request, response) {
//   console.log('Request received.');
//   response.writeHead(200, {'Content-Type': 'text/plain'});
//   response.write('Hello World');
//   response.end();
// }

// http.createServer(onRequest).listen(8888);

// console.log('Server has started.');

//third version(adding modular status to second version)

// var http = require('http');

// function start() {
//   function onRequest(request, response) {
//     console.log('Request received.');
//     response.writeHead(200, {'Content-Type': 'text/plain'});
//     response.write('Hello World');
//     response.end();
//   }

//   http.createServer(onRequest).listen(8888);
//   console.log('Server has started.');
// }

// exports.start = start;

//fourth iteration(adding URL module to check request path)

// var http = require('http');
// var url = require('url');

// function start(route, handle) {
//   function onRequest(request, response) {
//     var pathname = url.parse(request.url).pathname;
//     console.log('Request for ' + pathname + ' received.');

//     response.writeHead(200, {'Content-Type': 'text/plain'});
//     var content = route(handle, pathname);
//     response.write(content);
//     response.end();
//   }

//   http.createServer(onRequest).listen(8888);
//   console.log('Server has started.');
// }

// exports.start = start;


//fifth iteration: passing route a response param:

// 'use strict';

// var http = require('http');
// var url = require('url');

// function start(route, handle) {
//   function onRequest(request, response) {
//     var pathname = url.parse(request.url).pathname;
//     console.log('Request for ' + pathname + ' received.');

//     route(handle, pathname, response);
//   }

//   http.createServer(onRequest).listen(8888);
//   console.log('Server has started.');
// }

// exports.start = start;

//sixth iteration: adding POST listeners

'use strict';

var http = require('http');
var url = require('url');

function start(route, handle) {
  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log('Request for ' + pathname + ' received.');
    route(handle, pathname, response, request);
    }

  http.createServer(onRequest).listen(8888);
  console.log('Server has started.');
}

exports.start = start;
