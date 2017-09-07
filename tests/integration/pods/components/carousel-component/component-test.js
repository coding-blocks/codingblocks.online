import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('carousel-component', 'Integration | Component | carousel component', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{carousel-component}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#carousel-component}}
      template block text
    {{/carousel-component}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
