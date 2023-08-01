import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import App from "./App";
import { AuthContextProvider } from "./context/AuthContext";
import "./index.css";
import store from "./redux/store/store";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
    <Provider store={store}>
      <App />
      </Provider>
    </AuthContextProvider>
  </React.StrictMode>
);
