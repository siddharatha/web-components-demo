import {
  LitElement,
  html,
  css
} from "https://unpkg.com/lit-element@2.0.0-rc.5?module";

class SEHelloWorld extends LitElement {
  static get styles() {
    return css `
      :host {
        display: block;
      }
      p {
        color: orange;
        background-color: red;
      }
    `;
  }

  render() {
    return html `
      <p>Hello Schneider Electric</p>
      <div>Hello there</div>
    `;
  }
}

customElements.define("se-hello-world", SEHelloWorld);