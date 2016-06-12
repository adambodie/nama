import Ember from 'ember';
import config from './config/environment';
const Router = Ember.Router.extend({
  location: config.locationType
  });

Router.map(function() {
  this.route('index', {path: '/'});
  this.route('vowels');
  this.route('consonants');
  this.route('clicks');
  this.route('syntax', function() {
      this.route('activity', {resetNamespace: true});
      this.route('indirect', {resetNamespace: true});
      this.route('locative', {resetNamespace: true});
      this.route('argument', {resetNamespace: true});
      this.route('universal', {resetNamespace: true});
      this.route('demonstrative', {resetNamespace: true});
      this.route('relative', {resetNamespace: true});
      this.route('tense', {resetNamespace: true});
      this.route('passive', {resetNamespace: true});
      this.route('reflexive', {resetNamespace: true});
      this.route('applicative', {resetNamespace: true});
      this.route('aspect', {resetNamespace: true});
      this.route('negation', {resetNamespace: true});
      });
  });

export default Router;