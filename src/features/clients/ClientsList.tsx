import useClientsList from "../../api/hooks/useClientsList.ts";
import Client from "./Client.tsx";
import { Fragment } from "react";

export default function ClientsList() {
  const { clients, isLoading, error } = useClientsList();

  return (
    <Fragment>
      {isLoading ? (
        <p>LOADING...</p>
      ) : error ? (
        <p>ERROR LOADING CLIENTS LIST...</p>
      ) : (
        clients &&
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        clients.map((client) => (
          <Client
            key={client.id}
            firstName={client.firstName}
            lastName={client.lastName}
            email={client.email}
            id={client.id}
            status={true}
          />
        ))
      )}
    </Fragment>
  );
}
