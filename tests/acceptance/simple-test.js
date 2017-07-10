import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from '../helpers/start-app';

let App;

module('Simple Acceptance Test', {
  beforeEach() {
    App = startApp();
  },

  afterEach() {
    Ember.run(App, 'destroy');
  }
});

test('ES6 features work correcly', function(assert) {
  visit('/');

  andThen(() => {
    assert.equal('Test Value', find('#test-input').val(), 'Has arrow functions and template string as ES6 feature');
    assert.equal('one', find('#first-value').text(), 'Has generators as ES6 feature');
    assert.equal('two', find('#last-value').text(), 'Has generators as ES6 feature');
    assert.equal('dog', find('#animal-value').text(), 'Has class and getters/setters as ES6 feature');
  });
});
