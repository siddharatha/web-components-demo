import {
  LitElement,
  html,
  css
} from "https://unpkg.com/lit-element@2.0.0-rc.5?module";
import { lib } from "https://unpkg.com/apollo-client-browser@1.7.0/dist/apollo-client.min.js";
class SimpleGraphQLElement extends LitElement {
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
      <p>Hello GraphQL</p>
    `;
  }
}

customElements.define("simple-graphql-element", SimpleGraphQLElement);
