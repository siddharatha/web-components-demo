import {
  LitElement,
  html,
  css
} from "https://unpkg.com/lit-element@2.0.0-rc.5?module";

class SEProductDisplay extends LitElement {
  static get properties() {
    return {
      productname: {
        type: String
      },
      results: {
        type: Object
      }
    };
  }

  updated(changedProperties) {
    if (this.results === null) {
      const options = {
        method: "post",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          query: `query{
            product(name:"${this.productname}",language:"en",country:"US"){
              name
              description
              imageUrl
            }
          }`
        })
      };
      fetch(`http://localhost:4000/graphql`, options)
        .then(res => res.json())
        .then(({ data }) => {
          this.results = data;
          console.log(this.results);
        })
        .catch(ex => {
          console.log(ex);
        });
    }
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
    this.results = null;
  }

  render() {
    return html`
      Lets display here
      ${this.results &&
        this.results.product &&
        this.results.product.imageUrl &&
        html`
          <img
            src="${this.results.product.imageUrl}"
            height="300px"
            width="300px"
          />
        `}
    `;
  }
}

customElements.define("se-product-display", SEProductDisplay);
