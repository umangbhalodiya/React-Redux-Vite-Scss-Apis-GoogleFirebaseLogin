import "./App.css";
import { PersistGate } from "redux-persist/integration/react";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store, { persistor } from "./store";
import router from "./routes/routes.jsx";

function App() {
   return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  );
}

export default App;
