// ----------React---------
import { useEffect, useState } from "react";

// ----------Components---------
import { Button } from "../Button";

// ----------Contexts---------
import { ClientType } from "../../contexts/clientsContext";

// ----------Hooks---------
import { useClients } from "../../hooks/useClients";

// ----------External Libs---------
import { v4 } from "uuid";

interface ClienteFormProps {
  isActive: boolean;
  changeIsActive: () => void;
}

export function NewClientForm({ isActive, changeIsActive }: ClienteFormProps) {
  const [clientInfo, setClientInfo] = useState<ClientType>({
    id: v4(),
    address: "",
    company: "",
    email: "",
    name: "",
    note: "",
    phone: "",
    isActive: true,
  });

  const { createNewClient } = useClients();

  // Reset the form to blank and creates a new uuidv4, every time it is activated
  useEffect(() => {
    setClientInfo({
      id: v4(),
      address: "",
      company: "",
      email: "",
      name: "",
      note: "",
      phone: "",
      isActive: true,
    });
  }, [isActive]);

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
                createNewClient(clientInfo);
                changeIsActive();
              }}
              className="p-5 flex flex-col gap-3"
            >
              <span className="flex justify-between items-center flex-wrap gap-2">
                {/* Name */}
                <input
                  type="text"
                  placeholder="Nome"
                  className="border-2 rounded-md pl-2 w-60"
                  value={clientInfo.name}
                  onChange={(event) => {
                    setClientInfo({
                      id: clientInfo.id,
                      address: clientInfo.address,
                      company: clientInfo.company,
                      email: clientInfo.email,
                      name: event.target.value,
                      note: clientInfo.note,
                      phone: clientInfo.phone,
                      isActive: clientInfo.isActive,
                    });
                  }}
                />
                {/* Company */}
                <input
                  type="text"
                  placeholder="Empresa"
                  className="border-2 rounded-md pl-2 w-60"
                  value={clientInfo.company}
                  onChange={(event) => {
                    setClientInfo({
                      id: clientInfo.id,
                      address: clientInfo.address,
                      company: event.target.value,
                      email: clientInfo.email,
                      name: clientInfo.name,
                      note: clientInfo.note,
                      phone: clientInfo.phone,
                      isActive: clientInfo.isActive,
                    });
                  }}
                />
                {/* Phone */}
                <input
                  type="tel"
                  placeholder="Telefone"
                  className="border-2 rounded-md pl-2 w-60"
                  value={clientInfo.phone}
                  onChange={(event) => {
                    setClientInfo({
                      id: clientInfo.id,
                      address: clientInfo.address,
                      company: clientInfo.company,
                      email: clientInfo.email,
                      name: clientInfo.name,
                      note: clientInfo.note,
                      phone: event.target.value,
                      isActive: clientInfo.isActive,
                    });
                  }}
                />
                {/* Email */}
                <input
                  type="email"
                  placeholder="Email"
                  className="border-2 rounded-md pl-2 w-60"
                  value={clientInfo.email}
                  onChange={(event) => {
                    setClientInfo({
                      id: clientInfo.id,
                      address: clientInfo.address,
                      company: clientInfo.company,
                      email: event.target.value,
                      name: clientInfo.name,
                      note: clientInfo.note,
                      phone: clientInfo.phone,
                      isActive: clientInfo.isActive,
                    });
                  }}
                />
              </span>
              <span className="flex flex-col gap-2">
                {/* Address */}
                <input
                  type="text"
                  placeholder="Endereço"
                  className="border-2 rounded-md pl-2 w-[100%]"
                  value={clientInfo.address}
                  onChange={(event) => {
                    setClientInfo({
                      id: clientInfo.id,
                      address: event.target.value,
                      company: clientInfo.company,
                      email: clientInfo.email,
                      name: clientInfo.name,
                      note: clientInfo.note,
                      phone: clientInfo.phone,
                      isActive: clientInfo.isActive,
                    });
                  }}
                />
                {/* Note */}
                <input
                  type="text"
                  placeholder="Notas"
                  className="border-2 rounded-md pl-2 w-[100%] h-36"
                  value={clientInfo.note}
                  onChange={(event) => {
                    setClientInfo({
                      id: clientInfo.id,
                      address: clientInfo.address,
                      company: clientInfo.company,
                      email: clientInfo.email,
                      name: clientInfo.name,
                      note: event.target.value,
                      phone: clientInfo.phone,
                      isActive: clientInfo.isActive,
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
