import {
  LitElement,
  html,
  css
} from "https://unpkg.com/lit-element@2.0.0-rc.5?module";
class MyElement extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
      }
    `;
  }

  static get properties() {
    return {
      message: { type: String }
    };
  }

  constructor() {
    super();

    // default value is no longer set in the static properties definition, but in the constructor
    this.message = "World";
  }

  render() {
    return html`
      <p>Hello ${this.message}</p>

      <button @click=${this._onButtonClicked}>
        Click me!
      </button>
    `;
  }

  _onButtonClicked() {
    console.log("button clicked!");
  }
}
customElements.define("my-element", MyElement);
