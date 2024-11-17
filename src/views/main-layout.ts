import { html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("main-layout")
export class MainLayout extends LitElement {
  render() {
    return html`
      <nav>
        <a href="/">Home</a>
        <a href="/employees">employees</a>
        <a href="/employee/add">employee</a>
        <a href="/employee/2">employee 2</a>
      </nav>
      <main>
        <slot></slot>
      </main>
    `;
  }
}
