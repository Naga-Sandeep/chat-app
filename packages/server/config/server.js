import express from 'express';
import bodyParser from 'body-parser';
const server = express();

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));

server.use((req, res, next) => {
  console.log('setting resp Headers...');
  res.setHeader('Access-Control-Allow-Origin', '*'); // domain
  // res.setHeader( // headers
  //   'Access-Control-Allow-Headers',
  //   'Origin, X-Requested-With, Content-type, Accept'
  // );
  // res.setHeader( // methods
  //   'Access-Control-Allow-Methods',
  //   'GET, POST, PATCH, DELETE, OPTIONS'
  // );
  next();
});

export default server;
