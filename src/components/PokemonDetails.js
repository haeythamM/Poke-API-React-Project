import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Loading from './LoadingComponent';
import './PokemonDetails.css';

const PokemonDetails = () => {
    const { PokemonId } = useParams();
    const [pokemonDetails, setPokemonDetails] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(undefined);

    useEffect(() => {
        const fetchData = async () => {
            try {
                await new Promise(resolve => setTimeout(resolve, 50)); // Delay by 90 milliseconds
                const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${PokemonId}`);
                setPokemonDetails(response.data);
                setLoading(false); // Set loading to false after data is fetched
            } catch (error) {
                console.error('Error fetching Pokemon details:', error);
                setError('Error fetching Pokemon details');
                setLoading(false);
            }
        };

        fetchData();
    }, [PokemonId]);

    return (
        <div className="id-card-container">
            {loading && <Loading />} {/* Show loading component if loading is true */}
            {!loading && error && (
                <div className="text-center">
                    <p className="lead">{error}</p>
                    <Link to="/" className="btn btn-primary id-card-back-button">Go Back</Link>
                </div>
            )}
            {!loading && !error && pokemonDetails && (
                <div className="id-card">
                    <img src={pokemonDetails.sprites.front_default} alt={pokemonDetails.name} />
                    <div className="id-card-details">
                        <h2 className="id-card-title">{pokemonDetails.name}</h2>
                        <div className="id-card-stats">
                            <h3>Stats:</h3>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Stat</th>
                                        <th>Value</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {pokemonDetails.stats.map(stat => (
                                        <tr key={stat.stat.name}>
                                            <td>{stat.stat.name}</td>
                                            <td>{stat.base_stat}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <br />
                        <Link to="/" className="btn btn-primary id-card-back-button">Go Back</Link>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PokemonDetails;
