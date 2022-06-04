// ----------Images---------
import logo from "../../img/logo.png";

export function Header() {
  return (
    <>
      <header className="flex flex-1 justify-between m-3">
        <img src={logo} alt="xsistemas logo" />
        <h1 className="font-bold text-4xl text-gray-500">Frontend Challenge</h1>
        <div className="w-40"></div>
      </header>
      <hr className="mt-4 border-b-2 border-red-500 bg-red-500" />
    </>
  );
}
