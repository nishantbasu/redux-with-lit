import { html, fixture, expect } from '@open-wc/testing';
import './hello-world';

describe('HelloWorld', () => {
  it('displays a greeting', async () => {
    const el = await fixture(html`<hello-world></hello-world>`);
    const shadowRoot = el.shadowRoot;
    const greeting = shadowRoot?.querySelector('h1');
    expect(greeting?.textContent).to.equal('Hello, World!');
  });

  it('is accessible', async () => {
    const el = await fixture(html`<hello-world></hello-world>`);
    await expect(el).to.be.accessible();
  });
});
