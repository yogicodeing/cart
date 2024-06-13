
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Products from "./pages/Product/Products";
import ViewProducts from './pages/ViweProducts/ViewProducts';

function App() {
  return ( 
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/viewproduct/:id" element={<ViewProducts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
