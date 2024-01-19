import PageHeader from "../components/Page/PageHeader.tsx";
import PageTitle from "../components/Page/PageTitle.tsx";
import Content from "../components/Layout/Content/Content.tsx";
import { Fragment } from "react";

export default function About() {
  return (
    <Fragment>
      <PageHeader>
        <PageTitle text="About Client App" />
      </PageHeader>
      <Content>
        <p>This is some about text.</p>
      </Content>
    </Fragment>
  );
}
