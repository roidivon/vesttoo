const urlMetadata = require('url-metadata');
const uuid = require('uuid');
const { links } = require('./data');

const getLinks = (req, res) => {
  res.send(links);
};

const createLink = async (req, res) => {
  const { url } = req.body;
  try {
    console.log(`fetching metadata for url ${url}`);
    const { title, image, description } = await urlMetadata(url);
    const newLink = {
      id: uuid.v4(),
      url,
      title,
      description,
      image,
    };
    links.push(newLink);
    console.log(`created new link ${JSON.stringify(newLink)}`);
    res.sendStatus(201);
  } catch (e) {
    console.log(`failed to get metadata for ${url}`, e);
    res.status(500).json({ message: 'Failed to get metadata' });
  }
};

const deleteLink = (req, res) => {
  const { id } = req.params;
  const indexOfLink = links.findIndex((link) => link.id === id);
  if (indexOfLink === -1) {
    console.log(`request to delete non existing link with id ${id}`);
    res.sendStatus(404);
  }
  links.splice(indexOfLink, 1);
  res.sendStatus(204);
};

module.exports = {
  createLink,
  getLinks,
  deleteLink,
};
