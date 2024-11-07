import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { App } from "./components/App/App";

import "@telegram-apps/telegram-ui/dist/styles.css";
import "./styles/tailwind.css";

const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
