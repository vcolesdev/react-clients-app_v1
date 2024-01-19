import { Outlet } from "react-router-dom";
import App from "../app/App.tsx";
import Layout from "../components/Layout/Layout.tsx";
import SidebarContainer from "../features/sidebar/sidebarContainer.tsx";

export default function Root() {
  return (
    <App containerClasses="App flex">
      <SidebarContainer />
      <Layout>
        <Outlet />
      </Layout>
    </App>
  );
}
