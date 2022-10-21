import { BrowserRouter, Routes, Route} from "react-router-dom";
import ProductList from "./components/ProductList";
import AddProduct from "./components/AddProduct";

function App() {
  return (
    <BrowserRouter>
      <div className="container mt-5">
        <Routes>
          <Route exact path="/" element={<ProductList />}>
            
          </Route>
          <Route path="/add" element={<AddProduct />}>
            
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
