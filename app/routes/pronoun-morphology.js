import Ember from 'ember';

let pronouns = [{
  id: 1,
  symbol: '-ta',
  description: 'Masculine Singular 1st Person'
}, {
  id: 2,
  symbol: '-ts',
  description: 'Masculine Singular 2nd Person'
}, {
  id: 3,
  symbol: '	-p ~ -i',
  description: 'Masculine Singular 3rd Person'
}, {
  id: 4,
  symbol: '-kxm',
  description: 'Masculine Dual 1st Person'
}, {
  id: 5,
  symbol: '	-kxò',
  description: 'Masculine Dual 2nd Person'
}, {
  id: 6,
  symbol: '-kxà',
  description: 'Masculine Dual 3rd Person'
}, {
  id: 7,
  symbol: '-ke',
  description: 'Masculine Plural 1st Person'
}, {
  id:8,
  symbol: '-ko',
  description: 'Masculine Plural 2nd Person'
}, {
  id: 9,
  symbol: '-ku',
  description: 'Masculine Plural 3rd Person'
}, {
  id: 10,
  symbol: '-ta',
  description: 'Feminine Singular 1st Person'
}, {
  id: 11,
  symbol: '-s',
  description: 'Feminine Singular 2nd Person'
}, {
  id: 12,
  symbol: '-s',
  description: 'Feminine Singular 3rd Person'
}, {
  id: 13,
  symbol: '-m ~ -im',
  description: 'Feminine Dual 1st Person'
}, {
  id: 14,
  symbol: '-rò',
  description: 'Feminine Dual 2nd Person'
}, {
  id: 15,
  symbol: '-rà',
  description: 'Feminine Dual 3rd Person'
}, {
  id: 16,
  symbol: '-se',
  description: 'Feminine Plural 1st Person'
}, {
  id: 17,
  symbol: '-so',
  description: 'Feminine Plural 2nd Person'
}, {
  id: 18,
  symbol: '-tì',
  description: 'Feminine Plural 3rd Person'
}, {
  id: 19,
  symbol: '-m ~ -im',
  description: 'Common Dual 1st Person'
}, {
  id: 20,
  symbol: '-rò',
  description: 'Common Dual 2nd Person'
}, {
  id: 21,
  symbol: '-rà',
  description: 'Common Dual 3rd Person'
}, {
  id: 22,
  symbol: '-ta',
  description: 'Common Plural 1st Person'
}, {
  id: 23,
  symbol: '-tù',
  description: 'Common Plural 2nd Person'
}, {
  id: 24,
  symbol: '-n ~ -in',
  description: 'Common Plural 1st Person'
}, {
  id: 25,
  symbol: '-\u0294ì',
  description: 'Indefinite Singular 3rd Person'
}, {
  id: 26,
  symbol: '-rà',
  description: 'Indefinite Dual 3rd Person'
}, {
  id: 27,
  symbol: '	-n ~ -in',
  description: 'Indefinite Plural 3rd Person'
}];

export default Ember.Route.extend({
  model() {
    return pronouns;
  }
});
