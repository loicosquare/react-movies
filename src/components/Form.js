import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from './Card';

const Form = () => {

    const [moviesData, setMoviesData] = useState([]);
    const [search, setSearch] = useState("code");
    const [sortGoodBad, setSortGoodBad] = useState(null); //Aucun tris fait au départ!

    //Quand le composant arrive on joue cette fonction
    useEffect(() => {
        axios.get( `https://api.themoviedb.org/3/search/movie?api_key=ed82f4c18f2964e75117c2dc65e2161d&query=${search}&language=fr-FR`).
        then((res) => setMoviesData(res.data.results));
    }, [search]); // et ne se rejoue que lorsqu'on met un callback. dans ce cas il rejoue lorsqu'on recherche.

    return (
        <div className="form-component">
            <div className="form-container">
                <form>
                    <input type="text" placeholder="Etrez le tite d'un film" id="search-input"
                    onChange={(e) => setSearch(e.target.value)}/>
                    <input type="submit" value="Rechercher" />
                </form>

                <div className="btn-sort-container">
                    <div className="btn-sort" id="goodToBad" onClick={() => setSortGoodBad("goodToBad")}>Top<span>➜</span></div>
                    <div className="btn-sort" id="badToGood" onClick={() => setSortGoodBad("badToGood")}>Flop<span>➜</span></div>
                </div>
            </div>
            <div className="result">
                {moviesData.
                    slice(0, 12)
                    .sort((a, b) => {
                        if (sortGoodBad === "goodToBad") {
                            return b.vote_average - a.vote_average
                        }else if (sortGoodBad === "badToGood"){
                            return a.vote_average - b.vote_average
                        }else{
                            return b.vote_average - a.vote_average
                        }
                    })
                    .map((movie) => (
                    <Card key={movie.id} movie={movie}></Card> //on passe les props (toutes les données au composant enfant)
                ))}
            </div>
        </div>
    );
};

export default Form;