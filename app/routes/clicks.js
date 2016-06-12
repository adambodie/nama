import Ember from 'ember';

let clicks = [{
  id: 1,
  symbol: 'k\u01C0',
  description: 'Voiceless Unaspirated Dental Click',
  sound: 'Voiceless_unaspirated_dental'
}, {
  id: 2,
  symbol: 'k\u01C1',
  description: 'Voiceless Unaspirated Lateral Click',
  sound: 'Voiceless_unaspirated_lateral'
}, {
  id: 3,
  symbol: 'k\u01C3',
  description: 'Voiceless Unaspirated Alveolar Click',
  sound: 'Voiceless_unaspirated_alveolar'
}, {
  id: 4,
  symbol: 'k\u01C2',
  description: 'Voiceless Unaspirated Palatal Click',
  sound: 'Voiceless_unaspirated_palatal'
}, {
  id: 5,
  symbol: 'k\u01C0h',
  description: 'Voiceless Aspirated Dental Click',
  sound: 'Voiceless_aspirated_dental'
}, {
  id: 6,
  symbol: 'k\u01C1h',
  description: 'Voiceless Aspirated Lateral Click',
  sound: 'Voiceless_aspirated_lateral'
}, {
  id: 7,
  symbol: 'k\u01C3h',
  description: 'Voiceless Aspirated Alveolar Click',
  sound: 'Voiceless_aspirated_alveolar'
}, {
  id: 8,
  symbol: 'k\u01C2h',
  description: 'Voiceless Aspirated Palatal Click',
  sound: 'Voiceless_aspirated_palatal'
}, {
  id: 9,
  symbol: '\u014B\u01C0',
  description: 'Nasal Dental Click',
  sound: 'Nasal_dental'
}, {
  id: 10,
  symbol: '\u014B\u01C1',
  description: 'Nasal Lateral Click',
  sound: 'Nasal_lateral'
}, {
  id: 11,
  symbol: '\u014B\u01C3',
  description: 'Nasal Alveolar Click',
  sound: 'Nasal_alveolar'
}, {
  id: 12,
  symbol: '\u014B\u01C2',
  description: 'Nasal Palatal Click',
  sound: 'Nasal_palatal'
}, {
  id: 13,
  symbol: 'h\u01C0',
  description: 'Delayed Aspiration Dental Click',
  sound: 'Delayed_dental'
}, {
  id: 14,
  symbol: 'h\u01C1',
  description: 'Delayed Aspiration Lateral Click',
  sound: 'Delayed_lateral'
}, {
  id: 15,
  symbol: 'h\u01C3',
  description: 'Delayed Aspiration Alveolar Click',
  sound: 'Delayed_lateral'
}, {
  id: 16,
  symbol: 'h\u01C2',
  description: 'Delayed Aspiration Patalal Click',
  sound: 'Delayed_lateral'
}, {
  id: 17,
  symbol: '\u01C0\u0294',
  description: 'Glottal Closure Dental Click',
  sound: 'Glottal_dental'
}, {
  id: 18,
  symbol: '\u01C1\u0294',
  description: 'Glottal Closure Lateral Click',
  sound: 'Glottal_lateral'
}, {
  id: 19,
  symbol: '\u01C3\u0294',
  description: 'Glottal Closure Alveolar Click',
  sound: 'GLottal_alveolar'
}, {
  id: 20,
  symbol: '\u01C2\u0294',
  description: 'Glottal Closure Palatal Click',
  sound: 'Glottal_palatal'
}];

export default Ember.Route.extend({
  model() {
    return clicks;
  }
});


	