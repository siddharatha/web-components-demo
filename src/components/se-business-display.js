import {
  LitElement,
  html,
  css
} from 'https://unpkg.com/lit-element@2.0.0-rc.5?module';
import 'https://unpkg.com/wired-elements@0.9.0-1/dist/wired-elements.bundled.js';
import 'https://unpkg.com/@material/mwc-ripple@^0.1.0/mwc-ripple.js?module';

class SEBusinessDisplay extends LitElement {
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
        font-family: 'ArialRoundedMTforSE_Latin', Arial, 'Helvetica Neue',
          Helvetica, sans-serif;
      }
      .business-lines__icon {
        position: relative;
        height: 42px;
        width: 42px;
        margin: 0 auto;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
      }
      .business-lines__title {
        max-height: 45px;
        padding: 0 10px;
        color: #333;
        text-align: center;
        font-weight: 400;
      }
      .business-lines__row {
        flex-wrap:wrap;
        flex: 0 1 100%;
        display: flex;
        justify-content: center;
        max-width: 100vw;        
        background-color: #fff;
        border: 1px solid #e7e6e6;
        border-right: none;
        margin-bottom: 10px;
      }
      .business-lines__item {
        flex: 0 1 160px;
        font-size: 12px;
        line-height: 14px;
      }
      .business-lines__item--selected {
        background-color: #fafafa;
        border-bottom: 3px solid #3dcd58;
        margin-bottom: -1px;
      }
      ul,
      menu,
      dir {
        display: block;
        list-style-type: none;
        margin-block-start: 1em;
        margin-block-end: 1em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
        padding-inline-start: 40px;
      }
    `;
  }

  constructor() {
    super();
    this.results = [];
  }

  render() {
    return html`
      <div style="display:flex;color: #333;">
        <ul class="business-lines__row">
          ${this.results &&
            this.results.business &&
            this.results.business.map(
              eachBusiness =>
                html`
                <li
                  class="business-lines__item ${
                    eachBusiness.id === 1
                      ? 'business-lines__item--selected'
                      : ''
                  }"
                  @click="${this.selected}"
                  data-id="${eachBusiness.id}"
                >
                <div class="business-lines__icon" data-id="${eachBusiness.id}">
                  <img src="${eachBusiness.imageUrl}" />
                </div>
                <div data-id="${
                  eachBusiness.id
                }" class="business-lines__title">${eachBusiness.name}</div>
                <mwc-ripple></mwc-ripple>                  
                </div>
              `
            )}
        </ul>
      </div>
    `;
  }

  selected(evt) {
    evt.target.parentElement.parentElement
      .querySelectorAll('.business-lines__item--selected')
      .forEach(eachElement =>
        eachElement.classList.remove('business-lines__item--selected')
      );
    evt.target.parentElement.classList.add('business-lines__item--selected');
    this.dispatchEvent(
      new CustomEvent('selectionChange', {
        detail: evt.target.dataset.id
      })
    );
  }
}

customElements.define('se-business-display', SEBusinessDisplay);
