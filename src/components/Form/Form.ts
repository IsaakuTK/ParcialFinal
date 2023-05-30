import { addObserver, dispatch } from "../../store";
import { navigate, savef } from "../../store/action";
import { Formi } from "../../types/Formi";
import { Screens } from "../../types/store";
import styles from "./Form.css"


const info: Formi = {
    name: "",
    ingredientes: "",
    instructions: "",
    image: "",
  };

export default class Form extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
        addObserver(this);
    }

    connectedCallback() {
        this.render()
    }
   
    async sendf() {
        dispatch(await savef(info))
        dispatch(navigate(Screens.INFO))
        console.log(1)
    }

    render() {
        if (this.shadowRoot) this.shadowRoot.innerHTML = "";

        const all = this.ownerDocument.createElement("section");
        all.className="all";

        const lname = this.ownerDocument.createElement('label');
        lname.textContent="Name of the recipe: ";
        all.appendChild(lname);
        const name = this.ownerDocument.createElement('input');
        name.addEventListener("change", (e : any) => {
            info.name= e.target.value;
        });
        name.placeholder="Name";
        all.appendChild(name);


        const lingredientes = this.ownerDocument.createElement('label');
        lingredientes.textContent="Ingredients: ";
        all.appendChild(lingredientes);
        const ingredientes = this.ownerDocument.createElement('input');
        ingredientes.addEventListener("change", (e : any) => {
            info.ingredientes= e.target.value;
        });
        ingredientes.placeholder="Write each ingredien and (,) to order them";
        all.appendChild(ingredientes);


        const linstrutions = this.ownerDocument.createElement('label');
        linstrutions.textContent="Instrutions: ";
        all.appendChild(linstrutions);
        const instrutionss = this.ownerDocument.createElement('input');
        instrutionss.addEventListener("change", (e : any) => {
            info.instructions= e.target.value;
        });
        instrutionss.placeholder="Be clever with the instrucitons";
        all.appendChild(instrutionss);


        const limage = this.ownerDocument.createElement('label');
        limage.textContent="Image: ";
        all.appendChild(limage);
        const image = this.ownerDocument.createElement('input');
        image.addEventListener("change", (e : any) => {
            info.image= e.target.value;
        });
        image.placeholder="url of the image";
        all.appendChild(image);


        const send = this.ownerDocument.createElement("button");
        send.className="se";
        send.addEventListener("click", () =>{
            this.sendf();
        })
        send.textContent="Send";
        all.appendChild(send);

        this.shadowRoot?.appendChild(all);

        const css = this.ownerDocument.createElement("style");    
        css.innerHTML = styles;
        this.shadowRoot?.appendChild(css);
    }
}

customElements.define('my-form', Form)