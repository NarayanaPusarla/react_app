import logo from "./logo.svg";
import "./App.css";
import Brands from "./components/Brands";
import Default from "./components/layouts/Default";
import Navbar from "./components/Navbar";
import Routers from "./components/Routers";

function App() {
  return (
    <>
      <Default>
        <section>
          <Brands />
          <Navbar />
        </section>
        <section>
          <Routers />
        </section>
      </Default>
    </>
  );
}

export default App;
