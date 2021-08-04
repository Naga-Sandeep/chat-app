import Express from 'express';
import { createServer } from 'http';

const chatApp = Express();
const Server = createServer(chatApp);

chatApp.get('/', (req, res) => {
  res.send('<h1>Hello World Bitch!</h1>');
});

Server.listen(8000, () => {
  console.log('Server listening on PORT: 8000');
});


