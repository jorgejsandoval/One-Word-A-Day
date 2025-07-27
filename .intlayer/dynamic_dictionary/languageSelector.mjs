const content = {
  'en': () => import('./languageSelector.en.json', { assert: { type: 'json' }}).then(mod => mod.default),
  'es': () => import('./languageSelector.es.json', { assert: { type: 'json' }}).then(mod => mod.default),
  'fr': () => import('./languageSelector.fr.json', { assert: { type: 'json' }}).then(mod => mod.default)
};
export default content;
