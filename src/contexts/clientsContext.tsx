import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";

export interface ClientType {
  guid: string;
  name: string;
  company: string;
  email: string;
  phone: string;
  address: string;
  note: string;
  isActive: boolean;
}

export interface ClientsType {
  clients: ClientType[];
  searchClient: Function;
}

interface propsType {
  children?: JSX.Element;
}

export const ClientsContext = createContext({} as ClientsType);

export function ClientContextProvider(props: propsType) {
  const [clients, setClients] = useState<ClientType[]>([
    {
      guid: "",
      name: "",
      company: "",
      email: "",
      phone: "",
      address: "",
      note: "",
      isActive: true,
    },
  ]);

  useEffect(() => {
    async function getClients() {
      const get = await api.get("/clients");
      const parsedClients = get.data;
      setClients(parsedClients);
    }
    return () => {
      getClients();
    };
  }, []);

  async function searchClient(text: string) {
    const get = await api.get(`/clients?q=${text}`);
    const parsedClients = get.data;
    setClients(parsedClients);
  }

  return (
    <ClientsContext.Provider value={{ clients, searchClient }}>
      {props.children}
    </ClientsContext.Provider>
  );
}
