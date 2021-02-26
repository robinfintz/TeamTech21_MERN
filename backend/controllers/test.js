const express = require('express');

function sendAsHtml(response, text) {
    response.status(200);
    response.set('Content-Type', 'text/html');
    response.send(`<html><body><p>${text}</p></body></html>`);
}

exports.base = function(request, response) {
    sendAsHtml(response, 'This is the test home page.');
}

exports.student = function(request, response) {
    sendAsHtml(response, 'Hello, Student.');
}

exports.admin = function(request, response) {
    sendAsHtml(response, 'Hello, Admin.');
}