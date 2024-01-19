import { useGetClientsListQuery } from "../../redux/clientsApi.ts";

export default function useClientsList() {
  const { data: clients, isLoading, error } = useGetClientsListQuery();
  return { clients, isLoading, error };
}
