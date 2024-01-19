import FormUpdateClient from "../../features/forms/FormUpdateClient.tsx";
import { Fragment } from "react";
import { useParams } from "react-router-dom";
import { useGetClientQuery } from "../../redux/clientsApi.ts";

export default function UpdateClient() {
  const { clientId } = useParams();
  const { data: client, error, isLoading } = useGetClientQuery(clientId);

  return (
    <Fragment>
      <h3 className="mb-4 font-bold text-3xl">Update Client</h3>
      <p>This is the view to edit an existing client. Some input fields will be shown here.</p>
      <div>
        {isLoading ? (
          <p>LOADING...</p>
        ) : error ? (
          <p>ERROR LOADING CLIENT...</p>
        ) : (
          client && (
            <div>
              <article>
                <p>ID: {client.id}</p>
                <p>
                  Name: {client.firstName} {client.lastName}
                </p>
                <p>Email: {client.email}</p>
                <p>Phone: {client.phone}</p>
                <p>Status: {client.status}</p>
                <p>Comments: {client.comments}</p>
              </article>
              <FormUpdateClient client={client} clientId={client.id} />
            </div>
          )
        )}
      </div>
    </Fragment>
  );
}
