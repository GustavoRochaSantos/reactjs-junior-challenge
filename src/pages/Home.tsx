import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Pagination } from "../components/Pagination";
import { SearchBox } from "../components/SearchBox";
import { Table } from "../components/Table";

export function Home() {
  return (
    <>
      <Header />
      <div className="m-8">
        <SearchBox />
        <section className="flex justify-center items-center mt-5 flex-col gap-5">
          <Table />
          <Pagination />
        </section>
      </div>
      <Footer />
    </>
  );
}
