import { Route } from "@vaadin/router";

const routes: Route[] = [
  {
    path: "/",
    component: "main-layout",
    action: async () => {
      await import("./views/main-layout");
    },
    children: [
      {
        path: "/",
        component: "employee-list",
        action: async () => {
          await import("./views/employee/list");
        },
      },
      {
        path: "employees",
        component: "employee-list",
        action: async () => {
          await import("./views/employee/list");
        },
      },
      {
        path: "employee/add",
        component: "employee-form",
        action: async () => {
          await import("./views/employee/form");
        },
      },
      {
        path: "employee/:id",
        component: "employee-form",
        action: async () => {
          await import("./views/employee/form");
        },
      },
    ],
  },
];

export default routes;
