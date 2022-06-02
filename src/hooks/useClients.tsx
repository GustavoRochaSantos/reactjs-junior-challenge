import { useContext } from "react";
import { ClientsContext } from "../contexts/clientsContext";

export function useClients() {
  const value = useContext(ClientsContext);
  return value;
}
