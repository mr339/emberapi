import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('applicati-on', 'Integration | Component | applicati on', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{applicati-on}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#applicati-on}}
      template block text
    {{/applicati-on}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
