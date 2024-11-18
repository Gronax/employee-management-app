import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

/**
 * Interface representing an Employee.
 */
interface Employee {
  id: number;
  name: string;
  position: string;
}

/**
 * Interface representing the state of employees.
 */
interface EmployeeState {
  employees: Employee[];
  selectedEmployee: Employee | null;
}

/**
 * Initial state for the employee slice.
 */
const initialState: EmployeeState = {
  employees: [],
  selectedEmployee: null,
};

/**
 * Slice for managing employee state.
 */
const employeeSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {
    /**
     * Adds a new employee to the state.
     *
     * @param state - The current state of employees.
     * @param action - The action containing the new employee to add.
     */
    addEmployee: (state, action: PayloadAction<Employee>) => {
      state.employees.push(action.payload);
    },
    /**
     * Updates an existing employee in the state.
     *
     * @param state - The current state of employees.
     * @param action - The action containing the updated employee data.
     */
    updateEmployee: (state, action: PayloadAction<Employee>) => {
      const index = state.employees.findIndex(
        (emp) => emp.id === action.payload.id
      );
      if (index !== -1) {
        state.employees[index] = action.payload;
      }
    },
    /**
     * Deletes an employee from the state.
     *
     * @param state - The current state of employees.
     * @param action - The action containing the ID of the employee to delete.
     */
    deleteEmployee: (state, action: PayloadAction<number>) => {
      state.employees = state.employees.filter(
        (emp) => emp.id !== action.payload
      );
    },
  },
});

/**
 * Action creators generated for the employee slice.
 */
export const { addEmployee, updateEmployee, deleteEmployee } =
  employeeSlice.actions;

/**
 * Selector to get the list of employees from the state.
 *
 * @param state - The root state of the application.
 * @returns The list of employees.
 */
export const selectEmployees = (state: RootState) => state.employee;

export default employeeSlice.reducer;
