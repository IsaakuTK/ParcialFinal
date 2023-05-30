import { addObserver, appState, dispatch } from "../../store";
import { navigate } from "../../store/action";
import { Screens } from "../../types/store";
import styles from "./Card.css"


export default class Card extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
        addObserver(this);
    }

    connectedCallback() {
        this.render()
    }

    return(){
        dispatch(navigate(Screens.DASHBOARD))
    }
   
    render() {

        if (this.shadowRoot) this.shadowRoot.innerHTML = "";

        const all = this.ownerDocument.createElement("section");
        all.className="all";
        appState.forms.forEach((f) => {
            const form = this.ownerDocument.createElement("section");

            const RName = this.ownerDocument.createElement("h3");
            RName.textContent=f.name
            form.appendChild(RName)

            const RIngredientes = this.ownerDocument.createElement("h3");
            RIngredientes.textContent=f.ingredientes
            form.appendChild(RIngredientes)

            const RInstrucciones = this.ownerDocument.createElement("h3");
            RInstrucciones.textContent=f.instructions
            form.appendChild(RInstrucciones)


            const RImage = this.ownerDocument.createElement("img");
            RImage.src=f.image
            form.appendChild(RImage)



            all.appendChild(form)
        });

        const r = this.ownerDocument.createElement("button");
        r.className="se";
        r.addEventListener("click", () =>{
            this.return();
        })
        r.textContent="Return";
        all.appendChild(r);
       
        this.shadowRoot?.appendChild(all);

        const css = this.ownerDocument.createElement("style");    
        css.innerHTML = styles;
        this.shadowRoot?.appendChild(css);
    }
}

customElements.define('my-card', Card)