const express = require('express');
const cors = require('cors');
const { createLink, deleteLink, getLinks } = require('./links.service');
const {
  validateDeleteLinkIdMiddleware,
  validateCreateLinkPayloadMiddleware,
} = require('./middlewares');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/links', getLinks);
app.post('/link', validateCreateLinkPayloadMiddleware, createLink);
app.delete('/link/:id', validateDeleteLinkIdMiddleware, deleteLink);

if (process.env.NODE_ENV !== 'test') {
  app.listen(3001);
}

module.exports = {
  app,
};
