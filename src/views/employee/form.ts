import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("employee-form")
class EmployeeForm extends LitElement {
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
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" />

        <label for="position">Position:</label>
        <input type="text" id="position" name="position" />

        <button type="submit">Submit</button>
      </form>
    `;
  }
}
