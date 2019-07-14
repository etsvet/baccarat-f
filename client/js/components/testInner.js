import { LitElement, html } from 'lit-element';


export class Button extends LitElement {
    render() {
        return html`
            <p>A paragraph</p>    
        `;
    }
}

customElements.define('my-element', Button);