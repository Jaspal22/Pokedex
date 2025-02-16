import { Routes, Route } from "react-router-dom";
import PokeDex from "../components/pokedex/pokedex";
import PokemonDetails from "../components/pokemonDetails/pokemonDetails";

function CustomRoutes() {
    return (
        <Routes>
            <Route path="/" element={<PokeDex />} />
            <Route path="/pokemon/:id" element={<PokemonDetails />} />
        </Routes>
    )
}

export default CustomRoutes;