import { useEffect, useState } from "react";
import { ClientType } from "../../contexts/clientsContext";
import { useClients } from "../../hooks/useClients";
import { api } from "../../services/api";
import { Button } from "../Button";

type clientInfoType = {
  name: string;
  company: string;
  email: string;
  phone: string;
  address: string;
  note: string;
};

type ClienteFormProps = {
  isActive: boolean;
  changeIsActive: () => void;
  client: ClientType;
};

export function ClientForm({
  isActive,
  changeIsActive,
  client,
}: ClienteFormProps) {
  const [clientInfo, setClientInfo] = useState<clientInfoType>({
    address: "",
    company: "",
    email: "",
    name: "",
    note: "",
    phone: "",
  });

  const { updateClients } = useClients();

  useEffect(() => {
    setClientInfo({
      address: client.address,
      company: client.company,
      email: client.email,
      name: client.name,
      note: client.note,
      phone: client.phone,
    });
  }, [client]);

  async function saveClient() {
    const clientParsed = {
      id: client.id,
      name: clientInfo.name,
      company: clientInfo.company,
      email: clientInfo.email,
      phone: clientInfo.phone,
      address: clientInfo.address,
      note: clientInfo.note,
      isActive: client.isActive,
    };
    await api.put(`/clients/${client.id}`, clientParsed);
    changeIsActive();
    updateClients({
      id: client.id,
      name: clientInfo.name,
      company: clientInfo.company,
      email: clientInfo.email,
      phone: clientInfo.phone,
      address: clientInfo.address,
      note: clientInfo.note,
      isActive: client.isActive,
    });
  }

  return (
    <>
      {isActive && (
        <div className="h-[100%] w-[100%] absolute bottom-0 top-0 bg-slate-400/75 justify-center items-center flex">
          <span className="h-[60vh] w-[40vw] bg-white rounded-md">
            <header className="flex justify-center flex-col  ">
              <h1 className="font-bold text-xl text-slate-500 self-center p-1">
                Dados do cliente
              </h1>
              <hr className="h-[2px] bg-red-500" />
            </header>
            <form
              onSubmit={(event) => {
                event.preventDefault();
                saveClient();
              }}
              className="p-5 flex flex-col gap-3"
            >
              <span className="flex justify-between items-center flex-wrap gap-2">
                <input
                  type="text"
                  placeholder="Nome"
                  className="border-2 rounded-md pl-2 w-60"
                  value={clientInfo.name}
                  onChange={(event) => {
                    setClientInfo({
                      address: clientInfo.address,
                      company: clientInfo.company,
                      email: clientInfo.email,
                      name: event.target.value,
                      note: clientInfo.note,
                      phone: clientInfo.phone,
                    });
                  }}
                />

                <input
                  type="text"
                  placeholder="Empresa"
                  className="border-2 rounded-md pl-2 w-60"
                  value={clientInfo.company}
                  onChange={(event) => {
                    setClientInfo({
                      address: clientInfo.address,
                      company: event.target.value,
                      email: clientInfo.email,
                      name: clientInfo.name,
                      note: clientInfo.note,
                      phone: clientInfo.phone,
                    });
                  }}
                />
                <input
                  type="tel"
                  placeholder="Telefone"
                  className="border-2 rounded-md pl-2 w-60"
                  value={clientInfo.phone}
                  onChange={(event) => {
                    setClientInfo({
                      address: clientInfo.address,
                      company: clientInfo.company,
                      email: clientInfo.email,
                      name: clientInfo.name,
                      note: clientInfo.note,
                      phone: event.target.value,
                    });
                  }}
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="border-2 rounded-md pl-2 w-60"
                  value={clientInfo.email}
                  onChange={(event) => {
                    setClientInfo({
                      address: clientInfo.address,
                      company: clientInfo.company,
                      email: event.target.value,
                      name: clientInfo.name,
                      note: clientInfo.note,
                      phone: clientInfo.phone,
                    });
                  }}
                />
              </span>
              <span className="flex flex-col gap-2">
                <input
                  type="text"
                  placeholder="Endereço"
                  className="border-2 rounded-md pl-2 w-[100%]"
                  value={clientInfo.address}
                  onChange={(event) => {
                    setClientInfo({
                      address: event.target.value,
                      company: clientInfo.company,
                      email: clientInfo.email,
                      name: clientInfo.name,
                      note: clientInfo.note,
                      phone: clientInfo.phone,
                    });
                  }}
                />
                <input
                  type="text"
                  placeholder="Notas"
                  className="border-2 rounded-md pl-2 w-[100%] h-36"
                  value={clientInfo.note}
                  onChange={(event) => {
                    setClientInfo({
                      address: clientInfo.address,
                      company: clientInfo.company,
                      email: clientInfo.email,
                      name: clientInfo.name,
                      note: event.target.value,
                      phone: clientInfo.phone,
                    });
                  }}
                />
              </span>
              <span className="flex flex-1 justify-center gap-3 ">
                <button
                  type="submit"
                  className="h-12 w-32 bg-red-600 text-white p-2 rounded-lg font-semibold hover:bg-red-800 active:border-red-600 active:border-2"
                >
                  Salvar
                </button>
                <Button color="gray" buttonFunction={changeIsActive}>
                  Cancelar
                </Button>
              </span>
            </form>
          </span>
        </div>
      )}
    </>
  );
}
