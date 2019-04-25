import {
  LitElement,
  html,
  css
} from 'https://unpkg.com/lit-element@2.0.0-rc.5?module';
import 'https://unpkg.com/wired-elements@0.9.0-1/dist/wired-elements.bundled.js';
import 'https://unpkg.com/@material/mwc-ripple@^0.1.0/mwc-ripple.js?module';

class SECategoryDisplay extends LitElement {
  static get properties() {
    return {
      results: {
        type: Array
      }
    };
  }

  updated(changedProperties) {
    if (this.results && this.results.length === 0) {
      const options = {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          query: `query{
            business{
              name
              imageUrl
              id
              url
            }
          }`
        })
      };
      fetch(`https://sleepy-refuge-69790.herokuapp.com/`, options)
        .then(res => res.json())
        .then(({ data }) => {
          this.results = data;
          console.log(this.results);
        })
        .catch(ex => {
          console.error(ex);
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
    this.results = [];
  }

  render() {
    return html`
      Hello there am watching you
      <div style="display: flex;
    max-width: 600px;
    flex-wrap: wrap;">
        ${this.results &&
          this.results.business &&
          this.results.business.map(
            eachBusiness =>
              html`
                <div
                  style="height:100px;width:200px;display:flex;align-items:center;border:0.2px dotted"
                  @click="${this.selected}"
                  data-id="${eachBusiness.id}"
                >
                  <mwc-ripple></mwc-ripple>
                  <img src="${eachBusiness.imageUrl}" />
                  ${eachBusiness.name}
                </div>
              `
          )}
      </ul>
    `;
  }

  selected(evt) {
    this.dispatchEvent(
      new CustomEvent('selectionChange', { detail: evt.target.dataset.id })
    );
  }
}

customElements.define('se-category-display', SECategoryDisplay);
