import { FacebookLogo, InstagramLogo } from "phosphor-react";

export function Footer() {
  return (
    <>
      <footer className="flex justify-between items-center w-[100%] bg-gray-500 h-[17vh] pr-6 pl-6 text-white bottom-0 absolute">
        <section>
          <h3 className="font-bold">Contato</h3>
          <span className="flex gap-7">
            <a href="/">{"(27)"} 9 9999-9999</a>
            <a href="/">fulanodetal@teste.com.br</a>
          </span>
        </section>
        <section className="flex flex-col items-center">
          <h3 className="font-bold">Nossas Redes Sociais</h3>
          <span className="flex gap-2 text-3xl">
            <a href="/">
              <InstagramLogo />
            </a>
            <a href="/">
              <FacebookLogo />
            </a>
          </span>
        </section>
      </footer>
    </>
  );
}
