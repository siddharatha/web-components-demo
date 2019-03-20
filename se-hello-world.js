import {
  LitElement,
  html,
  css
} from "https://unpkg.com/lit-element@2.0.0-rc.5?module";

class SEHelloWorld extends LitElement {
  render() {
    html`
      <div>Hello Schneider Electric</div>
    `;
  }
}

customElements.define("se-hello-world", SEHelloWorld);
