import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import PokemonList from "./pages/pokemon-list"
import PageNotFound from "./pages/page-not-found"
import PokemonDetail from "./pages/pokemon-detail"
import PokemonEdit from "./pages/pokemon-edit"
import PokemonAdd from "./pages/pokemon-add"
import Login from "./pages/login"
import PrivateRoute from "./PrivateRoute"
import { useState } from "react"

const App = () => {
  const [isAuthenticated] = useState<boolean|null>(null)
  
  return (
    <BrowserRouter>
      <div>
        <nav>
          <div className="nav-wrapper teal">
            <Link to="/" className="brand-logo center">Pokédex</Link>
          </div>
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<PrivateRoute isAuthenticated={isAuthenticated}><PokemonList/></PrivateRoute>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/pokemons" element={<PrivateRoute isAuthenticated={isAuthenticated}><PokemonList/></PrivateRoute>}/>
        <Route path="/pokemon/add" element={<PrivateRoute isAuthenticated={isAuthenticated}><PokemonAdd/></PrivateRoute>}/>
        <Route path="/pokemons/:id" element={<PrivateRoute isAuthenticated={isAuthenticated}><PokemonDetail/></PrivateRoute>}/>
        <Route path="/pokemons/edit/:id" element={<PrivateRoute isAuthenticated={isAuthenticated}><PokemonEdit/></PrivateRoute>}/>
        <Route path="*" element={<PageNotFound/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App