import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Navbare } from './component/Navbare'
import './component/nav.css'
import { ShopContextProvider } from "./context/Shopcontext";

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <BrowserRouter>
          <Navbare />
        </BrowserRouter>
      </ShopContextProvider>
    </div>
  );
}

export default App;
