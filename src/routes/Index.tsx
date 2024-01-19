import PageHeader from "../components/Page/PageHeader.tsx";
import PageTitle from "../components/Page/PageTitle.tsx";
import Content from "../components/Layout/Content/Content.tsx";
import { Fragment } from "react";

export default function Index() {
  return (
    <Fragment>
      <PageHeader>
        <PageTitle text="Dashboard" />
      </PageHeader>
      <Content>
        <p>Welcome to your personal dashboard, Vanessa.</p>
      </Content>
    </Fragment>
  );
}
