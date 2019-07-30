import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

import { Menu } from '../components';

/**
 * @customElement
 * @polymer
 */
class BaccaratClientApp extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <b-menu></b-menu>
      <h2>Hello [[prop1]]!</h2>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'baccarat-client-app'
      }
    };
  }
}

window.customElements.define('baccarat-client-app', BaccaratClientApp);
