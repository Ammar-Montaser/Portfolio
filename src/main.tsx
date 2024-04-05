import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { Provider } from "react-redux";
import "./index.css";
import store from "./Redux/appStore.ts";
import { ReactLenis } from "@studio-freight/react-lenis";
// lenis options for configuration
const lenisOptions = {
  lerp: 0.1,
  duration: 1,
  smoothTouch: true, //smooth scroll for touch devices
  smooth: true,
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ReactLenis root options={lenisOptions}>
        <App />
      </ReactLenis>
    </Provider>
  </React.StrictMode>
);
