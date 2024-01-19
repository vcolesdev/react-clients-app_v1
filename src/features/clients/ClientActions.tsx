import { useDeleteClientMutation } from "../../redux/clientsApi.ts";
import { Link } from "react-router-dom";

export default function ClientActions({ clientId }) {
  const [deleteClient] = useDeleteClientMutation();

  const handleDeleteClient = (clientId) => {
    if (window.confirm("Are you sure you want to delete this client?")) {
      deleteClient(clientId);
    }
  };

  const editLinkStyles = `inline-block me-3 text-gray-400 underline hover:text-gray-600 focus:text-gray-600`;

  return (
    <div className="mt-4">
      <Link to={`/clients/${clientId}/update`} className={editLinkStyles}>
        Update Client
      </Link>
      <button
        className="inline-block text-gray-400 underline hover:text-red-500 focus:text-red-500"
        id="actionDeleteClient"
        onClick={() => {
          handleDeleteClient(clientId);
        }}
      >
        Delete Client
      </button>
    </div>
  );
}
