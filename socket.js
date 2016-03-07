var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var socket = io();

$('form').submit(function(){
    socket.emit('chat message', $('#m').val());
    $('#m').val('');
    return false;
});
socket.on('chat message', function(msg){
    $('#messages').append($('<li>').text(msg));
});
