import React from "react";
import "./styles/color.css";
import "./styles/font.css";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles/index.css";
import "./styles/tailwind.css";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "react-query";
import { persistor, store } from "store/store";
import { PersistGate } from "redux-persist/integration/react";

const queryClient = new QueryClient()
ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <QueryClientProvider client={queryClient}>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </QueryClientProvider>
    </PersistGate>
  </Provider>,

  document.getElementById("root")
);
