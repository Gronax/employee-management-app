import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";
import { connect } from "pwa-helpers";
import store from "../../store";
@customElement("employee-form")
class EmployeeForm extends connect(store)(LitElement) {
  static styles = css`
    :host {
      display: block;
      padding: 16px;
      font-family: Arial, sans-serif;
    }
    form {
      display: flex;
      flex-direction: column;
    }
    label {
      margin-bottom: 8px;
    }
    input {
      margin-bottom: 16px;
      padding: 8px;
      font-size: 16px;
    }
    button {
      padding: 8px 16px;
      font-size: 16px;
      cursor: pointer;
    }
  `;

  static properties = {
    employeeId: { type: Number },
  };

  firstUpdated() {
    super.firstUpdated();
    this.employeeId = this.location.params?.id;
  }

  render() {
    return html`
      <form>
        <p>This is Blog ${this.employeeId}</p>
        <input type="text" id="name" name="name" placeholder="Name" />
        <input type="text" id="last-name" name="last-name" placeholder="Last name" />
        <input type="text" id="employment-date" name="employment-date" placeholder="employment-date" />
        <input type="text" id="birth-date" name="birth-date" placeholder="birth-date" />
        <input type="text" id="phone" name="phone" placeholder="phone" />
        <input type="text" id="email" name="email" placeholder="email" />
        <input type="text" id="department" name="department" placeholder="department" />
        <input type="text" id="position" name="position" placeholder="position" />

        <button type="submit">Submit</button>
      </form>
    `;
  }
}
