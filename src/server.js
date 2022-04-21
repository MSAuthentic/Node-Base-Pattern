var config = require('./config/config');

const http = require('http');



const express = require('express');

// const bodyParser = require('body-parser');

const app = express();


 




// Avvio Del Server

if(config.Enabled){
const hostname = config.ServerConfig.Hostname;
const port = config.ServerConfig.Port;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end()
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
}else{console.log('Configurazioni non abilitate.');}