import "./components/export"
import "./screens/export";
import { addObserver, appState } from "./store/index";
import { Screens } from "./types/store";


class AppContainer extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
        addObserver(this);
    }

    connectedCallback() {
        this.render()
    }

    render() {
        if (this.shadowRoot) this.shadowRoot.innerHTML = "";
        switch (appState.screen) {
            case Screens.INFO:
              const info = this.ownerDocument.createElement("app-info");
              this.shadowRoot?.appendChild(info);
              break;
      
            case Screens.DASHBOARD:
              const dashboard = this.ownerDocument.createElement("app-dashboard");
              this.shadowRoot?.appendChild(dashboard);
              break;
      
            default:
              break;
          }
    }
}

customElements.define('app-container', AppContainer)