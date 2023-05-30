import { dispatch } from "../../store";
import { getf } from "../../store/action";
import styles from "./info.css"

export default class Info extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  async connectedCallback() {
    this.render();
  }

 
    render() {
      const card = this.ownerDocument.createElement("my-card");
      this.shadowRoot?.appendChild(card);

      const css = this.ownerDocument.createElement("style");    
      css.innerHTML = styles;
      this.shadowRoot?.appendChild(css);
  }
}
customElements.define("app-info", Info);