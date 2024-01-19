import PageHeader from "../components/Page/PageHeader.tsx";
import PageTitle from "../components/Page/PageTitle.tsx";
import Content from "../components/Layout/Content/Content.tsx";
import { Fragment } from "react";
import { Outlet } from "react-router-dom";

export default function Clients() {
  return (
    <Fragment>
      <PageHeader>
        <PageTitle text="Client Portal" />
      </PageHeader>
      <Content>
        <Outlet />
      </Content>
    </Fragment>
  );
}
