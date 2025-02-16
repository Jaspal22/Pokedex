import axios from "axios";
import { useEffect, useState } from "react";
import usePokemonList from "./usePokemonList";

function usePokemonDetail(id){
    const [pokemon, setPokemon] = useState({});
    let pokemonListHookResponse = [];

    async function downloadPokemon() {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        setPokemon({
            name: response.data.name,
            image: response.data.sprites.other.dream_world.front_default,
            weight: response.data.weight,
            height: response.data.height,
            types: response.data.types.map((t) => t.type.name)
        })
        // return response;
        setPokemonListState({...pokemonListState,url:(`https://pokeapi.co/api/v2/type/${pokemon.types ? pokemon.types[0] : 'fire'}`,true)})
    }

    const [pokemonListState,setPokemonListState] = usePokemonList(true)

    
    useEffect(() => {
        downloadPokemon();
        console.log("list   of fire ",pokemonListState)
    }, [])


}

export default usePokemonDetail;