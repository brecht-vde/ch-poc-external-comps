export default class UserComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get observedAttributes() {
    return ["username"];
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this.render();
  }

  render() {
    const username = this.getAttribute("user-name") || "N/A";

    this.shadowRoot.innerHTML = `
        <div>
            <span id="user-name">Hello, ${username}!</span>
        </div>
    `;
  }
}

customElements.define("user-component", UserComponent);
