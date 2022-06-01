import { Button } from "../Button";

export function SearchBox() {
  return (
    <>
      <section className="flex gap-4 w-[1000px]">
        <input
          type="text"
          placeholder="Pesquisar por nome, empresa , telefone, email ou status"
          className="w-[650px] h-12 rounded-lg border-gray-300 border-2 text-center"
        />
        <Button>Procurar</Button>
        <Button color="gray">Novo Usuário</Button>
      </section>
    </>
  );
}
