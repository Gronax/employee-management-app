import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";
import { connect } from "pwa-helpers";
import store from "../../store";

@customElement("employee-list")
class EmployeeList extends connect(store)(LitElement) {
  static styles = css`
    :host {
      display: block;
      padding: 16px;
    }
    h1 {
      color: #333;
    }
  `;

  render() {
    return html`
      <h1>Employee List</h1>
      <ul>
        <li>Employee 1</li>
        <li>Employee 2</li>
        <li>Employee 3</li>
      </ul>
    `;
  }
}
