module.exports =
`
    <link rel="import"  href="https://polygit.org/components/polymer/polymer-element.html">
    <script>
        class MyElement extends Polymer.Element {
            static get is() {
                return 'my-element';
            }
            constructor() {
                super();
                this.textContent = 'I\'m a my-element.';
            }
        }
        customElements.define(MyElement.is, MyElement);
    </script>

`;
