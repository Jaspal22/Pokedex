// import { useEffect, useState } from "react";
// import axios from "axios";
import Pokemon from "../pokemon/pokemon";
import "../pokemonList/pokemonList.css"
import usePokemonList from "../../../hooks/usePokemonList";

function PokemonList() {

    // const [pokemonList, setPokemonList] = useState([]);
    // const [isLoading, setIsloaging] = useState(true);

    // const [pokedexUrl, setPokedexUrl] = useState('https://pokeapi.co/api/v2/pokemon');
    // const [nextUrl, setNextUrl] = useState(' ');
    // const [prevUrl, setPrevUrl] = useState(' ');


    // const [pokemonListState, setPokemonListState] = useState({
    //     pokemonList : [],
    //     isLoading: true,
    //     pokedexUrl:'https://pokeapi.co/api/v2/pokemon',
    //     nextUrl:'',
    //     prevUrl:''
    // })


    // async function downloadPokemons() {

    //     const response = await axios.get(pokemonListState.pokedexUrl);
    //     const pokemonResults = response.data.results;
    //     console.log(response.data);
    //     // setPokemonListState({...pokemonListState,nextUrl: response.data.next});
    //     // setPokemonListState({...pokemonListState,prevUrl: response.data.previous});

    //     setPokemonListState({
    //         ...pokemonListState,
    //         nextUrl: response.data.next,
    //         prevUrl: response.data.previous
    //     })

    //     const pokemonResultPromise = pokemonResults.map((pokemon) => axios.get(pokemon.url))
    //     const pokemonData = await axios.all(pokemonResultPromise);
    //     console.log(pokemonData);

    //     const res = pokemonData.map((pokeData) => {
    //         const pokemon = pokeData.data;
    //         return ({
    //             id: pokemon.id,
    //             name: pokemon.name,
    //             image: (pokemon.sprites.other) ? pokemon.sprites.other.dream_world.front_default : pokemon.sprites.front_shiny,
    //             types: pokemon.types

    //         })
    //     });

    //     console.log(response.data);

    //     setPokemonListState((state)=>({
    //         ...state,
    //         pokemonList: res,
    //         isLoading: false
    //     }))

    //     // setPokemonList(res);

    //     // setIsloaging(false);
    //     // setPokemonListState({...pokemonListState, isLoading: false});

    // }

    // useEffect( () => {
    //     downloadPokemons();
    // }, [pokemonListState.pokedexUrl])


    const {pokemonListState, setPokemonListState } = usePokemonList('https://pokeapi.co/api/v2/pokemon',false); 

    return (<>
        <div className="pokemon-list-wraper">
            <div className="d-flex">
                {(pokemonListState.isLoading) ? 'Loading..........' :
                    pokemonListState.pokemonList.map((p) => <Pokemon name={p.name} image={p.image} id={p.id} key={p.id} />)
                }
            </div>
            <div className="controls">
                <button disabled={pokemonListState.prevUrl == null} onClick={() => {
                    const urlToSet = pokemonListState.prevUrl;
                     setPokemonListState({...pokemonListState,pokedexUrl:urlToSet})
                     } }>Prev.</button>
                <button disabled={pokemonListState.nextUrl == null} onClick={() => {
                    const urlToSet = pokemonListState.nextUrl;
                     setPokemonListState({...pokemonListState,pokedexUrl:urlToSet})
                     } }>Next</button>
            </div>
        </div>
    </>
    )
}

export default PokemonList;