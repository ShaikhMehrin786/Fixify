import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

import "bootstrap/dist/css/bootstrap.min.css";

import "./assets/css/variable.css";
import "./assets/css/global.css";
import "./assets/css/animations.css";

import "./assets/css/navbar.css";
import "./assets/css/hero.css";
import "./assets/css/serviceCategories.css";
import "./assets/css/statistics.css";
import "./assets/css/howItWorks.css";
import "./assets/css/whyChoose.css";
import "./assets/css/customerReviews.css";
import "./assets/css/faq.css";
import "./assets/css/callToAction.css";
import "./assets/css/footer.css";

import "./assets/css/auth.css";
import "./assets/css/register.css";

import "./assets/css/responsive.css";
import { AuthProvider } from "./context/AuthContext";
import ToastProvider from "./components/common/ToastProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
      <BrowserRouter>
          <ToastProvider />
          <App />
      </BrowserRouter>
  </AuthProvider>
);