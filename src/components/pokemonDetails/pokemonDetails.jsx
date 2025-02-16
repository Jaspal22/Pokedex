import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./pokemonDetails.css"
import usePokemonList from "../../../hooks/usePokemonList";

function PokemonDetails() {

    const { id } = useParams();
    const [pokemon, setPokemon] = useState({});

    async function downloadPokemon() {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        setPokemon({
            name: response.data.name,
            image: response.data.sprites.other.dream_world.front_default,
            weight: response.data.weight,
            height: response.data.height,
            types: response.data.types.map((t) => t.type.name)
        })
    }

    const {pokemonListState} = usePokemonList(`https://pokeapi.co/api/v2/type/${pokemon.types ? pokemon.types[0] : 'fire'}`,true);

    useEffect(() => {
        downloadPokemon();
        console.log("list   of fire ",pokemonListState)
    }, [])

    return (
        <div className="pokemon-details-wrapper">
            <div className="pokemon-name">name : {pokemon.name}</div>
            <div className="pokemon-image">
                <img src={pokemon.image} alt="image of pokemon" />
            </div>
            <div > {pokemon.height && <div className="pokemon-hieght">Height: {pokemon.height}</div>}</div>
            <div className="pokemon-weight">Weight: {pokemon.weight}</div>
            <div className="pokemon-types">
                {pokemon.types && pokemon.types.map((t) => <div key={t}>Type: {t}</div>)}
            </div>
            
            {pokemon.types &&
            <div className="likely-pokemons">
                More {pokemon.types[0]} pokemons
                <ul>
                    {pokemonListState.pokemonList && pokemonListState.pokemonList.map((p)=><li key={p.pokemon.url} >{p.pokemon.name}</li>)}
                </ul>
            </div>
            }
        </div>
        )
}

export default PokemonDetails;