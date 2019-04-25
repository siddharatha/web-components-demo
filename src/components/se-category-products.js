import {
  LitElement,
  html,
  css
} from 'https://unpkg.com/lit-element@2.0.0-rc.5?module';
import 'https://unpkg.com/wired-elements@0.9.0-1/dist/wired-elements.bundled.js';
import 'https://unpkg.com/@material/mwc-ripple@^0.1.0/mwc-ripple.js?module';

class SECategoryProducts extends LitElement {
  static get properties() {
    return {
      categoryId: {
        type: String
      },
      results: {
        type: Array
      }
    };
  }

  updated(changedProperties) {
    if (
      changedProperties.has('categoryId') &&
      changedProperties.get('categoryId')
    ) {
      this.getTopRunnerProducts();
    }
  }

  getTopRunnerProducts() {
    const options = {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        query: `query{
                    categoryProducts(businessid:${this.categoryId}){
                    id
                    name
                    pictureUrl
                    description    
                    longDescription                
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

  static get styles() {
    return css`
      :host {
        display: block;
        font-family: 'ArialRoundedMTforSE_Latin', Arial, 'Helvetica Neue',
          Helvetica, sans-serif;
      }
      .all-products-grid__wrapper {
        width: 400px;
        font-family: 'ArialRoundedMTforSE_Latin', Arial, 'Helvetica Neue';
      }
      .all-products-grid__subcontainer {
        font-family: ArialRoundedMTforSE_Latin, Arial, 'Helvetica Neue',
          Helvetica, sans-serif;
        display: flex;
        flex-flow: wrap;
        align-content: flex-start;
        max-width: 75%;
      }
      .all-products-slider {
        display: flex;
        flex-flow: wrap;
        align-content: flex-start;
        width: 100%;
      }
      .has-menu .all-products-grid__block {
        width: 33.33333333%;
      }
      .all-products-grid__block {
        height: 300px;
        padding: 10px;
      }
      .all-products-grid__card {
        display: block;
        height: 100%;
        background-color: #fff;
        border: 1px solid #ededed;
      }
      .badge-promo {
        position: relative;
      }
      .top-runner {
        overflow: hidden;
        position: relative;
        display: flex;
        flex-flow: column;
        padding: 20px;
      }
      .top-runner-text {
        text-align: center;
      }
      .top-runner-image__container {
        margin-top: 10px;
      }
      .top-runner-image {
        display: block;
        width: 150px;
        height: 150px;
        margin: 0 auto;
      }
      .top-runner-footer {
        position: absolute;
        bottom: 0;
        height: 40px;
        display: block;
        width: 100%;
      }
      .top-runner-description {
        overflow: hidden;
        margin: 0;
        font-size: 13px;
        line-height: 18px;
        color: #626469;
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
    this.categoryId = 1;
    this.getTopRunnerProducts();
  }

  render() {
    return html`    
      <div class="all-products-grid__subcontainer">
        <ul
          class="all-products-slider all-products-slider--tiny js-slider-lines"
        >
          ${this.results &&
            this.results.categoryProducts &&
            this.results.categoryProducts.map(
              eachCategoryProduct =>
                html`
                  <li
                    data-id="${eachCategoryProduct.id}"
                    class="all-products-grid__block js-slider-item all-products-grid__block--one all-products-slider__item--tiny"
                  >
                    <div
                      data-id="${eachCategoryProduct.id}"
                      class="all-products-grid__wrapper all-products-grid__card badge-promo badge-promo--fit statistics"
                      data-badge=""
                    >
                      <div
                        data-id="${eachCategoryProduct.id}"
                        class="top-runner-text"
                      >
                        <h3
                          data-id="${eachCategoryProduct.id}"
                          class="top-runner-header js-mobile-ellipsis"
                        >
                          ${eachCategoryProduct.name}
                        </h3>
                        <p
                          data-id="${eachCategoryProduct.id}"
                          class="top-runner-description pes-mobile-hide"
                        >
                          ${eachCategoryProduct.longDescription}
                        </p>
                        <picture
                          data-id="${eachCategoryProduct.id}"
                          class="top-runner-image top-runner-image__container lazy--loaded"
                        >
                          <img
                            class="top-runner-image"
                            src="${eachCategoryProduct.pictureUrl}"
                            alt="${eachCategoryProduct.description}"
                          />
                        </picture>
                        <footer
                          data-id="${eachCategoryProduct.id}"
                          class="top-runner-footer pes-mobile-hide"
                        ></footer>
                      </div>
                      <mwc-ripple></mwc-ripple>
                    </div>
                  </li>
                `
            )}
        </ul>
      </div>
    `;
  }
}

customElements.define('se-category-products', SECategoryProducts);
