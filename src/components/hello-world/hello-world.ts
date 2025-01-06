import { css, LitElement, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import template from './html/hello-world.html';
import componentStyles from '../../styles/component-styles.scss';
import { ExampleStateModel } from '../../models/example-state-model';
import { store } from '../../store/app-store';
import { exampleActions } from '../../store/example-store';

@customElement('hello-world')
export class HelloWorld extends LitElement {
  @property() stringToDisplay = 'Hello, World!';
  @property() color = '';

  static get styles() {
    return css`
      ${unsafeCSS(componentStyles)}
    `;
  }

  getExampleState(){
    const stateResponse = store.getState()?.ExampleState as ExampleStateModel;
    this.stringToDisplay = stateResponse.name;
    this.shadowRoot!.getElementById('heading')!.style.color = stateResponse.color;
  }

  updateExampleState(){
    const stateObject = {
      fieldName: 'color',
      fieldValue: 'blue',
    };
    store.dispatch(exampleActions.updateExampleState(stateObject));
  }

  upsertExampleState(){
    store.dispatch(exampleActions.upsertExampleState({
      name : 'My Dummy Name',
      color: 'red'
    }));
  }
  
  render() {
    return template.call(this);
  }
}
