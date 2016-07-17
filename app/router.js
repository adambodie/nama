import Ember from 'ember';
import config from './config/environment';
const Router = Ember.Router.extend({
  location: config.locationType
  });

Router.map(function() {
  this.route('index', {path: '/'});
  this.route('phonology', function(){
    this.route('vowels', {resetNamespace: true});
    this.route('consonants', {resetNamespace: true});
    this.route('clicks', {resetNamespace: true});
    });
  this.route('morphology', function () {
    this.route('pronoun-morphology', {resetNamespace: true});
    this.route('noun-morphology', {resetNamespace: true});
    this.route('verb-morphology', {resetNamespace: true});
    this.route('structure', {resetNamespace: true});    
    });
  this.route('syntax', function() {
    this.route('declarative', {resetNamespace: true});
    this.route('verbphrase', {path: '/verb-phrase', resetNamespace: true});
    this.route('tense', {resetNamespace: true});
    this.route('aspect', {resetNamespace: true});
    this.route('negation', {resetNamespace: true});
    this.route('interrogative', {resetNamespace: true});
    this.route('hortative', {resetNamespace: true});
    this.route('modifier', {resetNamespace: true});
    });

  this.route('lexicon', function(){
    this.route('borrowing', {resetNamespace: true});
    this.route('gender', {path: '/gender-replacement', resetNamespace: true});
    
    });


});
export default Router;