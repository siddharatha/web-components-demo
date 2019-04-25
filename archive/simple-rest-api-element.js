import {
  LitElement,
  html,
  css
} from "https://unpkg.com/lit-element@2.0.0-rc.5?module";
import "https://unpkg.com/wired-elements@0.9.0-1/dist/wired-elements.bundled.js";

class SimpleRestAPIElement extends LitElement {
  static get properties() {
    return {
      productname: { type: String },
      posts: { type: Array },
      productInfo: { type: Object },
      launchInfo: { type: Object }
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
    this.productname = "PostAPI";
    this.productInfo = {
      name: "PostAPI",
      description: "hello there PostAPI"
    };
    this.posts = [];
    this.launchInfo = {};
    fetch("https://my-json-server.typicode.com/typicode/demo/posts")
      .then(res => res.json())
      .then(data => (this.posts = data));
  }

  render() {
    return html`
      <p>Lets call Some REST APIs</p>
      <h1>${this.productname}</h1>

      <wired-listbox>
        ${this.posts.map(
          eachPost =>
            html`
              <wired-item
                value="${eachPost.id}"
                text="${eachPost.title}"
                role="option"
              />
            `
        )}
      </wired-listbox>
    `;
  }
}

customElements.define("simple-rest-api-element", SimpleRestAPIElement);
