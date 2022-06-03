import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";

export interface ClientType {
  id: string;
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
  updateClients: (client: ClientType) => void;
  deleteClient: (id: string) => void;
  createNewClient: (client: ClientType) => void;
}

interface propsType {
  children?: JSX.Element;
}

export const ClientsContext = createContext({} as ClientsType);

export function ClientContextProvider(props: propsType) {
  const [clients, setClients] = useState<ClientType[]>([
    {
      id: "",
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

    getClients();
  }, []);

  async function searchClient(text: string) {
    const get = await api.get(`/clients?q=${text}`);
    const parsedClients = get.data;
    setClients(parsedClients);
  }

  function updateClients(client: ClientType) {
    const newClients = clients.map((cli) => {
      if (client.id === cli.id) {
        return {
          id: cli.id,
          name: client.name,
          company: client.company,
          email: client.email,
          phone: client.phone,
          address: client.address,
          note: client.note,
          isActive: client.isActive,
        };
      }

      return cli;
    });

    setClients(newClients);
  }

  async function deleteClient(id: string) {
    await api.delete(`/clients/${id}`);
    const newClients = clients.filter((client) => {
      return client.id != id;
    });

    setClients(newClients);
  }

  async function createNewClient(client: ClientType) {
    if (
      clients.filter((cli) => {
        return cli.id === client.id;
      }) != []
    ) {
      await api.post("/clients", client);
      setClients((state) => [...state, client]);
    }
  }

  return (
    <ClientsContext.Provider
      value={{
        clients,
        searchClient,
        updateClients,
        deleteClient,
        createNewClient,
      }}
    >
      {props.children}
    </ClientsContext.Provider>
  );
}
