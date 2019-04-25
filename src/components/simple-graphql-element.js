import {
  LitElement,
  html,
  css
} from "https://unpkg.com/lit-element@2.0.0-rc.5?module";
class SimpleGraphQLElement extends LitElement {
  static get properties() {
    return {
      query: {
        type: String
      },
      results: { type: Object }
    };
  }

  updated(changedProperties) {
    const options = {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        query: this.query
      })
    };
    fetch(`http://localhost:4000/graphql`, options)
      .then(res => res.json())
      .then(({ data }) => {
        this.results = data;
      });
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
  }

  render() {
    return html`
      <div>Query:</div>
      <pre>${this.query}</pre>
      <div>Result:</div>
      <pre>${JSON.stringify(this.results, null, 2)}</pre>
    `;
  }
}

customElements.define("simple-graphql-element", SimpleGraphQLElement);
