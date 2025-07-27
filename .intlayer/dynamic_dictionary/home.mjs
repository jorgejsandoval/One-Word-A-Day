const content = {
  'en': () => import('./home.en.json', { assert: { type: 'json' }}).then(mod => mod.default),
  'es': () => import('./home.es.json', { assert: { type: 'json' }}).then(mod => mod.default),
  'fr': () => import('./home.fr.json', { assert: { type: 'json' }}).then(mod => mod.default)
};
export default content;
