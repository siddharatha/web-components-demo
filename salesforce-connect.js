import {
  LitElement,
  html,
  css
} from "https://unpkg.com/lit-element@2.0.0-rc.5?module";
import "https://unpkg.com/wired-elements@0.9.0-1/dist/wired-elements.bundled.js";
import "https://unpkg.com/@polymer/paper-button@3.0.1/paper-button.js?module";
import "https://unpkg.com/@polymer/paper-spinner@3.0.1/paper-spinner.js?module";
import * as jsforce from "https://cdnjs.cloudflare.com/ajax/libs/jsforce/1.9.1/jsforce.min.js";
class SalesforceConnect extends LitElement {
  static get properties() {
    return {
      loginurl: "https://test.salesforce.com"
    };
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }
    `;
  }

  constructor() {
    super();
    console.log(jsforce);
  }

  render() {
    return html`
      <button
        raised
        on-click=${e => {
          console.log(e);
        }}
      >
        Connect to salesforce
      </button>
      <wired-card elevation="5">
        Connection: Inactive
      </wired-card>
    `;
  }
}

customElements.define("salesforce-connect", SalesforceConnect);
