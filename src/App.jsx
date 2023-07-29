
import { Routes } from "react-router-dom";
import "./App.css";
import { Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import PokedexPage from "./pages/PokedexPage";
import PokeIdPage from "./pages/PokeIdPage";
import Page404 from "./pages/Page404";
import ProtectedRoutes from "./pages/ProtectedRoutes";

function App() {
  

  return (
  <div>
   <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route element={<ProtectedRoutes/>}>
        <Route path="/pokedex" element={<PokedexPage/>}/>
        <Route path="/pokedex/:id" element={<PokeIdPage/>}/>
      </Route>
      <Route path="*" element={<Page404/>}/>
   </Routes>
  </div>
  )
}

export default App;
