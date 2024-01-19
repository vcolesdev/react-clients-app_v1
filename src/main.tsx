import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./app/store.ts";
import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./routes/Root.tsx";
import Index from "./routes/Index.tsx";
import About from "./routes/About.tsx";
import Clients from "./routes/Clients.tsx";
import AddClient from "./routes/clients/AddClient.tsx";
import UpdateClient from "./routes/clients/UpdateClient.tsx";
import ViewClients from "./routes/clients/ViewClients.tsx";
import ClientProfile from "./routes/clients/ClientProfile.tsx";

import "./app/App.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <Index /> },
      { path: "/", element: <Index /> },
      { path: "about", element: <About /> },
      {
        path: "/clients/*",
        element: <Clients />,
        children: [
          { index: true, element: <ViewClients /> },
          { path: ":clientId", element: <ClientProfile /> },
          { path: "add-client", element: <AddClient /> },
          { path: ":clientId/update", element: <UpdateClient /> }
        ]
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
