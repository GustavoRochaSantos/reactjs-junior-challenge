import { ClientContextProvider } from "./contexts/clientsContext";
import { Home } from "./pages/Home";

function App() {
  return (
    <>
      <ClientContextProvider>
        <Home />
      </ClientContextProvider>
    </>
  );
}

export default App;
