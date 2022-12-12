import React from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "@mui/material";
import { HelloWorld } from "helloWorld/HelloWorld";

import "./index.css";
import { theme } from "./AppTheme";

const App = () => (
  <div className="container">
    <ThemeProvider theme={theme}>
      <div>Name: mf-react-host</div>
      <HelloWorld authToken="loremipsum"/>
    </ThemeProvider>
  </div>
);
const container = document.getElementById("app");
const root = createRoot(container!);
root.render(<App />);