import * as components from "./components/index.js"

class AppContainer extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback(){
        this.render();
    }

    render(){
        this.shadowRoot.innerHTML = `
        <my-post nameprofile="jonathandoe" viewers="414.646 views" comments="view all 29.884 comments"></my-post>
        `
    }
}

customElements.define("app-container",AppContainer);