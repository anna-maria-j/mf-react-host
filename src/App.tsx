import React from "react";
import { createRoot } from "react-dom/client";
import { EventBusTopic } from "@moodys/mdc-frontend.utils.event-bus";
import { HelloWorld } from "helloWorld/HelloWorld";

import { useEventBus } from "./hooks";
import "./index.css";

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useEventBus(EventBusTopic.IsAuthenticated);

  return (
    <div className="container">
      <h1>React microfrontend host</h1>
      <button className="loginBtn" onClick={() => setIsAuthenticated(!isAuthenticated)}>
        Sign { isAuthenticated ? 'out' : 'in' }
      </button>
      <HelloWorld authToken="input_from_React_host"/>
    </div>
  );
};

const container = document.getElementById("app");
const root = createRoot(container!);
root.render(<App />);