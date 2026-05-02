import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import CredenceLanding from "../CredenceLanding.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CredenceLanding />
  </StrictMode>,
);
