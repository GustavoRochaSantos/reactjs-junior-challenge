import { ClientType } from "../../contexts/clientsContext";
import { Button } from "../Button";

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
            <form className="p-5 flex flex-col gap-3">
              <span className="flex justify-between items-center flex-wrap gap-2">
                <input
                  type="text"
                  placeholder="Nome"
                  className="border-2 rounded-md pl-2 w-60"
                  value={client.name}
                />

                <input
                  type="text"
                  placeholder="Empresa"
                  className="border-2 rounded-md pl-2 w-60"
                  value={client.company}
                />
                <input
                  type="tel"
                  placeholder="Telefone"
                  className="border-2 rounded-md pl-2 w-60"
                  value={client.phone}
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="border-2 rounded-md pl-2 w-60"
                  value={client.email}
                />
              </span>
              <span className="flex flex-col gap-2">
                <input
                  type="text"
                  placeholder="Endereço"
                  className="border-2 rounded-md pl-2 w-[100%]"
                  value={client.address}
                />
                <input
                  type="text"
                  placeholder="Notas"
                  className="border-2 rounded-md pl-2 w-[100%] h-36"
                  value={client.note}
                />
              </span>
            </form>
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
          </span>
        </div>
      )}
    </>
  );
}
