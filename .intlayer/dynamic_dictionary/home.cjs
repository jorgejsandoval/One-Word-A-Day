const content = {
  'en': () => Promise.resolve(require('./home.en.json')),
  'es': () => Promise.resolve(require('./home.es.json')),
  'fr': () => Promise.resolve(require('./home.fr.json'))
};
module.exports = content;
