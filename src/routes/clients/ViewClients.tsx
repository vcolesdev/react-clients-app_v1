import Heading from "../../components/Layout/Content/Heading.tsx";
import ClientsList from "../../features/clients/ClientsList.tsx";
import { Fragment } from "react";

export default function ViewClients() {
  return (
    <Fragment>
      <Heading title="Directory" />
      <ClientsList />
    </Fragment>
  );
}
