import Subheading from "../../components/Layout/Content/Subheading.tsx";
import FormAddClient from "../../features/forms/FormAddClient.tsx";
import { Fragment } from "react";

export default function AddClient() {
  return (
    <Fragment>
      <Subheading title="Add New Client" />
      <FormAddClient />
    </Fragment>
  );
}
