const content = {
  'en': () => Promise.resolve(require('./languageSelector.en.json')),
  'es': () => Promise.resolve(require('./languageSelector.es.json')),
  'fr': () => Promise.resolve(require('./languageSelector.fr.json'))
};
module.exports = content;
