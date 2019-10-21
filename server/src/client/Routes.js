import React from "react";
import App from "./App";
import HomePage from "./pages/HomePage";
import UsersListPage, { loadData } from "./pages/UsersListPage";

// setting it up like this to use SSR
export default [
  {
    ...App,
    routes: [
      {
        ...HomePage,
        path: "/",
        exact: true
      },
      {
        ...UsersListPage,
        path: "/users"
      }
    ]
  }
];
