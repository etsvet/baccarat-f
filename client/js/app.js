import { Button } from './components/testInner';

class MainMenu extends HTMLElement {
    constructor() {
        super();

        // Create a shadow root
        var shadow = this.attachShadow({mode: 'open'});

        // Create spans
        var wrapper = document.createElement('span');
        wrapper.setAttribute('class', 'wrapper');
        var icon = document.createElement('span');
        icon.setAttribute('class', 'icon');
        icon.setAttribute('tabindex', 0);
        var info = document.createElement('span');
        info.setAttribute('class', 'info');

        // Take attribute content and put it inside the info span
        var text = this.getAttribute('text');
        info.textContent = text;

        // Insert icon
        var imgUrl;
        if (this.hasAttribute('img')) {
            imgUrl = this.getAttribute('img');
        } else {
            imgUrl = 'img/default.png';
        }
        var img = document.createElement('img');
        img.src = imgUrl;
        icon.appendChild(img);

        // Create some CSS to apply to the shadow dom
        var style = document.createElement('style');

        style.textContent = '.wrapper {' +
        // CSS truncated for brevity

        // attach the created elements to the shadow dom

        shadow.appendChild(style);
        shadow.appendChild(wrapper);
        wrapper.appendChild(icon);
        wrapper.appendChild(info);

    }

    connectedCallback() {
        console.log('MainMenu is connected!');
    }

    disconnectedCallback() {
        console.log('MainMenu is disconnected!');
    }

    adoptedCallback() {
        console.log('MainMenu is adopted!');
    }

    atributeChangedCallback() {

    }

}

customElements.define('popup-info', MainMenu);

const body = document.querySelector('body');
const el = document.createElement('popup-info');
const e2 = document.createElement('my-element');

body.appendChild(el);
body.appendChild(e2);

setTimeout(() => {
    el.remove();
    setTimeout(() => {
        body.appendChild(el);
    }, 2000);
}, 3000);

