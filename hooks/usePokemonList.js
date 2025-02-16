import axios from "axios";
import { useState, useEffect } from "react";

function usePokemonList(url , type) {
    const [pokemonListState, setPokemonListState] = useState({
        pokemonList: [],
        isLoading: true,
        pokedexUrl: url,
        nextUrl: '',
        prevUrl: ''
    })

    async function downloadPokemons() {

        const response = await axios.get(pokemonListState.pokedexUrl);
        const pokemonResults = response.data.results;
        console.log(response.data);
        // setPokemonListState({...pokemonListState,nextUrl: response.data.next});
        // setPokemonListState({...pokemonListState,prevUrl: response.data.previous});

        setPokemonListState({
            ...pokemonListState,
            nextUrl: response.data.next,
            prevUrl: response.data.previous
        })
        if (type) {
                setPokemonListState((state)=>({
                    ...state,
                    pokemonList: response.data.pokemon.slice(0,5) 
                }))
        }
        else{
            const pokemonResultPromise = pokemonResults.map((pokemon) => axios.get(pokemon.url))
            const pokemonData = await axios.all(pokemonResultPromise);
            console.log(pokemonData);

            const res = pokemonData.map((pokeData) => {
                const pokemon = pokeData.data;
                return ({
                    id: pokemon.id,
                    name: pokemon.name,
                    image: (pokemon.sprites.other) ? pokemon.sprites.other.dream_world.front_default : pokemon.sprites.front_shiny,
                    types: pokemon.types

                })
            });

            console.log(response.data);

            setPokemonListState((state) => ({
                ...state,
                pokemonList: res,
                isLoading: false
            }))

            // setPokemonList(res);

            // setIsloaging(false);
            // setPokemonListState({...pokemonListState, isLoading: false});

        }
    }


    useEffect(() => {
        downloadPokemons();
    }, [pokemonListState.pokedexUrl])

    return {
        pokemonListState,
        setPokemonListState,
    }
}

export default usePokemonList;