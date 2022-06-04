// ----------React------
import { useState } from "react";

// ----------Components---------
import { ClientForm } from "../components/ClientForm";
import { NewClientForm } from "../components/ClientForm/NewClientForm";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Pagination } from "../components/Pagination";
import { SearchBox } from "../components/SearchBox";
import { Table } from "../components/Table";

// ----------Context---------
import { ClientType } from "../contexts/clientsContext";

// ----------Hooks---------
import { useClients } from "../hooks/useClients";

export function Home() {
  const { clients } = useClients();
  
  const [isActive, setIsActive] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [client, setClient] = useState<ClientType>({
    id: "",
    name: "",
    company: "",
    email: "",
    phone: "",
    address: "",
    note: "",
    isActive: true,
  });
  const [isNewClientActive, setIsNewClientActive] = useState(false);

  // Get client information on table render
  function getClient(client: ClientType) {
    setClient(client);
  }

  // Changes if the modal to update client is active or not
  function changeIsActive() {
    if (isActive && isNewClientActive) {
      setIsActive(false);
      setIsNewClientActive(false);
    } else setIsActive(!isActive);
  }

  // Change the page shown according to the page number
  function onPageChange(number: number) {
    setCurrentPage(number);
  }

  // Change the active status of the modal to create a new client
  function changeIsNewClientActive() {
    if (isActive && isNewClientActive) {
      setIsActive(false);
      setIsNewClientActive(false);
    } else setIsNewClientActive(!isNewClientActive);
  }

  return (
    <>
      <Header />
      <div className="m-8">
        <SearchBox onIsActiveChange={changeIsNewClientActive} />
        <section className="flex justify-center items-center mt-5 flex-col gap-5">
          <Table
            clients={clients}
            changeIsActive={changeIsActive}
            getClient={getClient}
            currentPage={currentPage}
          />
          <Pagination currentPage={currentPage} onPageChange={onPageChange} />
        </section>
      </div>
      <Footer />
      <ClientForm
        isActive={isActive}
        changeIsActive={changeIsActive}
        client={client}
      />
      <NewClientForm
        changeIsActive={changeIsNewClientActive}
        isActive={isNewClientActive}
      />
    </>
  );
}
