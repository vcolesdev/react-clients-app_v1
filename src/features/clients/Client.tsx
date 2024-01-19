import { ClientProps } from "../../api/_interfaces.ts";
import ClientActions from "./ClientActions.tsx";
import {
  ClientEmail,
  ClientDetail,
  ClientFullname,
  ClientStatus,
  ClientWrapper
} from "./ClientDetails.tsx";
import { Link } from "react-router-dom";

export default function Client({
  firstName,
  lastName,
  email,
  id,
  status
}: ClientProps): JSX.Element {
  return (
    <article className="client border border-gray-300 bg-white p-6 rounded-xl mb-4">
      <ClientWrapper>
        <ClientDetail>
          <Link to={`/clients/${id}`}>
            <ClientFullname extraClasses="underline" firstName={firstName} lastName={lastName} />
          </Link>
          <ClientEmail email={email} />
          <ClientStatus status={status} />
        </ClientDetail>
        {/* Actions */}
        <ClientActions clientId={id} />
      </ClientWrapper>
    </article>
  );
}
