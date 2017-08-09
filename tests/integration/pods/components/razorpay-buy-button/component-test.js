import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('razorpay-buy-button', 'Integration | Component | razorpay buy button', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{razorpay-buy-button}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#razorpay-buy-button}}
      template block text
    {{/razorpay-buy-button}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
