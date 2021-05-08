import { BrowserRouter, Route } from "react-router-dom";

import Menu from "./Components/Menu";
import Banner from "./Components/Banner";
import NewProducts from "./Components/NewProducts";
import Footer from "./Components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Banner />
      <NewProducts />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
