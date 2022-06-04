import { useContext } from "react";
import { ClientsContext } from "../contexts/clientsContext";

// It`s an hook that takes all the values of the context and pass as return
export function useClients() {
  const value = useContext(ClientsContext);
  return value;
}
