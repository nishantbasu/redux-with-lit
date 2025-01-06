import { css, LitElement, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import template from './html/hello-world.html';
import componentStyles from '../../styles/component-styles.scss';

@customElement('hello-world')
export class HelloWorld extends LitElement {
  @property() stringToDisplay = 'Hello, World!';

  static get styles() {
    return css`
      ${unsafeCSS(componentStyles)}
    `;
  }

  render() {
    return template.call(this);
  }
}
