import { html, PolymerElement } from '@polymer/polymer';


export class Menu extends PolymerElement {
    constructor() {
        super();
        this.addEventListener('mousemove', this.handleHover);
        this.prevXPos = undefined;
        this.prevYPos = undefined;
        this.xPos = undefined;
        this.yPos = undefined;
        this.cancelToken = undefined;
        this.handleHover = this.handleHover.bind(this);
        this.animateButtonLensing = this.animateButtonLensing.bind(this);
    }

    handleHover(event) {
        this.prevXPos = this.xPos;
        this.prevYPos = this.yPos;
        this.xPos = event.clientX;
        this.yPos = event.clientY;
        this.cancelToken = window.requestAnimationFrame(this.animateButtonLensing);
    };

    animateButtonLensing(timestamp) {
        if (this.prevXPos === this.xPos && this.prevYPos === this.yPos) {
            return;
        }

        const buttons = this.shadowRoot.querySelectorAll('.button');
        buttons.forEach(button => {
            const dimensions = button.getBoundingClientRect();
            const buttonYMiddle = dimensions.top + dimensions.height/2;
            const distanceYFromCursor = Math.abs(buttonYMiddle - this.yPos);
            const isInsideMenu = dimensions.left <= this.xPos && this.xPos <= dimensions.right;
            if (distanceYFromCursor < 150 && isInsideMenu) {
                console.log('dis:', (150 - distanceYFromCursor)/100);
                button.style.transform = `scale(${(150 - distanceYFromCursor/3)/100})`;
            } else {
                button.style.transform = 'scale(1)';
            }
        });

        // this.cancelToken = window.requestAnimationFrame(this.animateButtonLensing);
    };

    connectedCallback() {
        this.cancelToken = window.requestAnimationFrame(this.animateButtonLensing);
    }

    disconnectedCallback() {
        window.cancelAnimationFrame(this.cancelToken);
    }

    static get template() {
        return html`
            <style>
                .button {
                    border: solid black 1px;
                    font-family: 'Montserrat', sans-serif;
                    margin: 10px;
                    font-size: 2em;
                    display: inline-block;
                    padding: 10px;
                    border-radius: 5px;
                    cursor: pointer;
                    /*transition: color 0.5s, transform 0.1s;*/
                    user-select: none;
                    color: grey;
                }
                
                .button:hover {
                    /*background-color: black;*/
                    border: solid black 2px;
                    color: black;
                    /*color: white;*/
                    /*transform: scale(1.25);*/
                }
                
                .container {
                    display: flex;
                    justify-content: center;
                    flex-direction: column;
                    align-items: center;
                }
                
            </style>
            <div class="container">
                <div class="button">SIMULATE 1</div>
                <div class="button">SIMULATE 2</div>
                <div class="button">SIMULATE 3</div>
                <div class="button">SIMULATE 4</div>
                <div class="button">SIMULATE 5</div>
                <div class="button">SIMULATE 6</div>
                <div class="button">SIMULATE 7</div>
                <div class="button">SIMULATE 8</div>
            </div>
        `;
    }
}


window.customElements.define('b-menu', Menu);