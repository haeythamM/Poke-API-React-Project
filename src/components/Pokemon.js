import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loading from './LoadingComponent';
import './Pokemon.css';

const Pokemon = () => {
    const [pokemonList, setPokemonList] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                await new Promise(resolve => setTimeout(resolve, 50)); 
                const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151');
                const { results } = response.data;
                setPokemonList(results);
                setLoading(false);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="pokemon-container">
            <h1>Welcome to the Poke App</h1>
            <h2>Check out our Top 151 Pokemon!</h2>
            <p>Pokemon is a game where you are given a list of pokemons and you have to choose one of them.</p>
            
            {loading && <Loading />} 
            
            <div className="pokemon-grid">
                {pokemonList.map((pokemon, index) => (
                    <div className="pokemon-card" key={index}>
                        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`} alt={pokemon.name} />
                        <div className="pokemon-details">
                            <h5>{pokemon.name}</h5>
                            <Link to={`/pokemon/${index + 1}`} className="details-link">Show Details</Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Pokemon;
