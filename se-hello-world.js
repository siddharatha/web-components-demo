import {
  LitElement,
  html,
  css
} from "https://unpkg.com/lit-element@2.0.0-rc.5?module";

class SEHelloWorld extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
      }
      p {
        color: orange;
      }
    `;
  }

  render() {
    return html`
      <p>Hello Schneider Electric</p>
    `;
  }
}

customElements.define("se-hello-world", SEHelloWorld);
