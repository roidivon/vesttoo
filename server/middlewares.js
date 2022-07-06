const { links } = require('./data');

const validateCreateLinkPayloadMiddleware = (req, res, next) => {
  if (!req.body.url) {
    console.log('received request to create link with no url in body');
    return res.sendStatus(400);
  }
  next();
};

const validateDeleteLinkIdMiddleware = (req, res, next) => {
  const { id } = req.params;
  const indexOfLink = links.findIndex((link) => link.id === id);
  if (indexOfLink === -1) {
    console.log(`request to delete non existing link with id ${id}`);
    return res.sendStatus(404);
  }
  next();
};

module.exports = {
  validateCreateLinkPayloadMiddleware,
  validateDeleteLinkIdMiddleware,
};
