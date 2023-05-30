import styles from "./dashboard.css"

export default class Dashboard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

 
    render() {
      const forms = this.ownerDocument.createElement("my-form");
      this.shadowRoot?.appendChild(forms);

      const css = this.ownerDocument.createElement("style");    
      css.innerHTML = styles;
      this.shadowRoot?.appendChild(css);
  }
}
customElements.define("app-dashboard", Dashboard);