// src/main.tsx

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import Layout from "./components/Layout";
import { RecoilRoot } from "recoil";
import { SignInModal } from "./components/modals/SignInModal";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <RecoilRoot>
    <React.StrictMode>
      <Layout>
        <App />
        <SignInModal />
      </Layout>
    </React.StrictMode>
  </RecoilRoot>,
);
