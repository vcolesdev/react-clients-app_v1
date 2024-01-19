import { Fragment } from "react";
import { useParams } from "react-router-dom";
import { useGetClientQuery } from "../../redux/clientsApi.ts";
import Subheading from "../../components/Layout/Content/Subheading.tsx";
export default function ClientProfile(): JSX.Element {
  const { clientId } = useParams();
  console.log(`Client ID: ${clientId}`);
  const { data: client, error, isLoading } = useGetClientQuery(clientId);

  return (
    <Fragment>
      <Subheading
        title={client ? `${client.firstName} ${client.lastName}` : `FirstName LastName`}
      />
      <div>
        {isLoading ? (
          <p>LOADING...</p>
        ) : error ? (
          <p>ERROR LOADING CLIENT...</p>
        ) : (
          client && (
            <div>
              <p>ID: {client.id}</p>
              <p>
                Name: {client.firstName} {client.lastName}
              </p>
              <p>Email: {client.email}</p>
              <p>Phone: {client.phone}</p>
              <p>Status: {client.status}</p>
            </div>
          )
        )}
      </div>
    </Fragment>
  );
}
