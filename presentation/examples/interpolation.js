module.exports =
`
// String interpolation with ES6
const name = 'Jason';
const el = document.getElementById('my-div');
el.innerHTML = \`<div>Hello, my name is \${name}\`;
// Backbone.js
const _        = require('lodash');
const Backbone = require('backbone');
const MyView = Backbone.View.extend({
    el: 'body',
    template: _.template(/* html string */),
    render: function() {
        const data = this.model.toJSON();
        const html = this.template(data)
        this.$el.html(html);
        return this;
    }
});
const view = new MyView({
    model: /* model instance */
});
view.render();
// yo-yo (uses morphdom)
const yo = require('yo-yo');
const list = items => yo\`<ul>
    \${items.map(item => yo\`<li>\${item}</li>\`)}
</ul>\`;
const el = list([
    'grizzly',
    'polar',
    'brown'
]);
document.body.appendChild(el);
// lit-html (used by Polymer)
import {html, render} from 'lit-html';
const hello = name => html\`<div>Hi \${name}!</div>\`;
// This renders <div>Hello Steve!</div> to body
render(hello('Steve'), document.body);
// This updates to <div>Hello Kevin!</div>,
// but only updates the \${name} part
render(hello('Kevin'), document.body);

`;
