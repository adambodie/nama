import Ember from 'ember';

let consonants = [{
  id: 1,
  symbol: 'p',
  description: 'Bilabial Stop'
}, {
  id: 2,
  symbol: 't',
  description: 'Dental Stop'
}, {
  id: 3,
  symbol: '(c)',
  description: 'Palatal Stop'
}, {
  id: 4,
  symbol: 'k',
  description: 'Velar Stop'
}, {
  id: 5,
  symbol: '\u0294',
  description: 'Glottal Stop'
}, {
  id: 6,
  symbol: 'ts',
  description: 'Dental Affricate'
}, {
  id: 7,
  symbol: 'kx',
  description: 'Velar Affricate'
}, {
  id:8,
  symbol: '(f)',
  description: 'Labiodental Fricative'
}, {
  id: 9,
  symbol: '(v)',
  description: 'Labiodental Fricative'
}, {
  id: 10,
  symbol: 's',
  description: 'Alveolar Fricative'
}, {
  id: 11,
  symbol: 'x',
  description: 'Velar Fricative'
}, {
  id: 12,
  symbol: 'h',
  description: 'Glottal Fricative'
}, {
  id: 13,
  symbol: 'm',
  description: 'Bilabial Nasal'
}, {
  id: 14,
  symbol: 'n',
  description: 'Dental Nasal'
}, {
  id: 15,
  symbol: 'r',
  description: 'Alveolar Trill'
}, {
  id: 16,
  symbol: '(l)',
  description: 'Alveolar Lateral'
}];

export default Ember.Route.extend({
  model() {
    return consonants;
  }
});

