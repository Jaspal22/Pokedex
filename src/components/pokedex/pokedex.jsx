
import PokemonList from "../pokemonList/pokemonList";
import "./pokedex.css"
import Search from "../search/search";

function PokeDex() {
  console.log("printer");
    return (
        <div className="Pokedex-wrapper">
          <h1 id="Pokedex-heading">Pokemon</h1>
          <Search/>
          <PokemonList/>
        </div>
    )

}

export default PokeDex;