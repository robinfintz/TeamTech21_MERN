const express = require('express');



exports.base = function(request, response)  {
    response.status(200);
    response.set('Content-Type', 'text/html');
    response.send(`<html><body><p>Auth recieved</p></body></html>`);
}
