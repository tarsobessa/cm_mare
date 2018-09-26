import * as jsonServer from 'json-server';
import { Express } from 'express';
import {handleAuthorization} from './authz';

import * as fs from 'fs';
import * as https from 'https';
import { handleAuthentication } from './auth';

const server: Express = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares)

// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser)

server.post('/login', handleAuthentication);
server.use('/orders', handleAuthorization);

// Login
server.post('/login', (req, resp) => {
  resp.json({message: 'ok'});
})

// Use default router
server.use(router)

const options = {
  cert: fs.readFileSync('./backend/keys/cert.pem'),
  key: fs.readFileSync('./backend/keys/key.pem')
}

https.createServer(options, server).listen(3001, () => {
  console.log('JSON Server esta rodando em https://localhost:3001')
})
