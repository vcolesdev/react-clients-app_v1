import {
  ClientDetailProps,
  ClientEmailProps,
  ClientFullNameProps,
  ClientStatusProps
} from "../../api/_interfaces.ts";

// Client wrapper.
export const ClientWrapper = ({ children }): JSX.Element => {
  return <div className="client__wrapper">{children}</div>;
};

// Client detail wrapper.
export const ClientDetail = ({ children }: ClientDetailProps): JSX.Element => {
  return <div className="client__detail">{children}</div>;
};

// Display Client full name.
export const ClientFullname = ({
  extraClasses,
  firstName,
  lastName
}: ClientFullNameProps): JSX.Element => {
  return (
    <div className="client__fullname">
      <h4 className={`inline-block font-semibold text-lg ${extraClasses}`}>
        {firstName} {lastName}
      </h4>
    </div>
  );
};

// Display Client email.
export const ClientEmail = ({ email }: ClientEmailProps): JSX.Element => {
  return (
    <div className="client_email">
      <span className="inline-block">{email}</span>
    </div>
  );
};

// Display Client current status ["active", "inactive"].
export const ClientStatus = ({ status }: ClientStatusProps): JSX.Element => {
  return (
    <div className="client__status pt-2">
      <div
        className={`inline-block relative border px-2.5 py-1 rounded-lg ${
          status ? "border-green-500" : "border-gray-400"
        }`}
      >
        <span
          className={`block text-xs font-bold uppercase ${
            status ? "text-green-500" : "text-gray-400"
          }`}
        >
          {status ? "active" : "inactive"}
        </span>
      </div>
    </div>
  );
};
