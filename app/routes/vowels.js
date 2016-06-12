import Ember from 'ember';

let vowels = [{
  id: 1,
  symbol: 'a',
  description: 'Opened front oral'
}, {
  id: 2,
  symbol: 'ã',
  description: 'Opened front nasal'
}, {
  id: 3,
  symbol: 'e',
  description: 'Closed-mid open oral'
}, {
  id: 4,
  symbol: '\u0259',
  description: 'Mid central oral'
}, {
  id: 5,
  symbol: 'i',
  description: 'Closed front oral'
}, {
  id: 6,
  symbol: 'ĩ',
  description: 'Closed front nasal'
}, {
  id: 7,
  symbol: 'o',
  description: 'Closed-mid back oral'
}, {
  id: 8,
  symbol: 'õ',
  description: 'Closed-mid back nasal'
}, {
  id: 9,
  symbol: 'u',
  description: 'Closed back oral'
}, {
  id: 10,
  symbol: 'ũ',
  description: 'Closed back nasal'
}];

export default Ember.Route.extend({
  model() {
    return vowels;
  }
});

