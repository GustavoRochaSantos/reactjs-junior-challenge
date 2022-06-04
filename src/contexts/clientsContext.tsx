// ----------React---------
import { createContext, useEffect, useState } from "react";

// ----------Services---------
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

// Create a context with type defined
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

  // Get the clients data from the API and returns in an array of objects
  useEffect(() => {
    async function getClients() {
      const get = await api.get("/clients");
      const parsedClients = get.data;
      setClients(parsedClients);
    }

    getClients();
  }, []);

  // A function to search in the API by some text provided and sets the clients to the search results
  async function searchClient(text: string) {
    const get = await api.get(`/clients?q=${text}`);
    const parsedClients = get.data;
    setClients(parsedClients);
  }

  // Updates the state clients, seraching by id, with the information freshly provided
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

  // Delete a client from the API and the clients state
  async function deleteClient(id: string) {
    await api.delete(`/clients/${id}`);
    const newClients = clients.filter((client) => {
      return client.id != id;
    });

    setClients(newClients);
  }

  // Creates a new client in the API and updates the clients state
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
