import { useState } from "react";
import { ClientForm } from "../components/ClientForm";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Pagination } from "../components/Pagination";
import { SearchBox } from "../components/SearchBox";
import { Table } from "../components/Table";
import { ClientType } from "../contexts/clientsContext";
import { useClients } from "../hooks/useClients";

export function Home() {
  const [isActive, setIsActive] = useState(false);
  const { clients } = useClients();
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

  function getClient(client: ClientType) {
    setClient(client);
  }

  function changeIsActive() {
    setIsActive(!isActive);
  }

  function onPageChange(number: number) {
    setCurrentPage(number);
  }

  return (
    <>
      <Header />
      <div className="m-8">
        <SearchBox />
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
    </>
  );
}
