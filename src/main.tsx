import { AppRoot } from "@telegram-apps/telegram-ui";

import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import "./scss/main.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <AppRoot>
    <App />
  </AppRoot>
);
