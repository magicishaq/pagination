import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const Card = () => {
  const id = useParams();
  const url = "https://pokeapi.co/api/v2/pokemon/";
  const [pokemonData, setPokemonData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    fetch(`${url}${id.id}/`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("something bad happened here");
        }
      })
      .then((response) => setPokemonData(response)).then(response => setLoading(!loading))
      .catch((error) => setError(error));
  },[]);
  if(!loading){
      return (<div>Loading ...</div>)
  }
  if(error){
      return (<div>Error has happened, please try again later</div>)
  }
  return (
    <div id="cards">
      <figure className={`card card--${pokemonData.types[0].type.name }`}>
        <div className="card__image-container">
         {pokemonData.sprites && <img
            src={pokemonData.sprites.other["official-artwork"].front_default}
            //src={Logo}
            alt={pokemonData.name}
            className="card__image"
          /> }
        </div>

        <figcaption className="card__caption">
          <h1 className="card__name">{pokemonData.name}</h1>
          <h3 className="card__type">
          {pokemonData.types.map((entry, idx) => {
          return <span key={idx}>{entry.type.name} </span> ;
          })}
          </h3>
          <table className="card__stats">
            <tbody>
              {pokemonData.stats.map((metric, idx) => {
                return (
                  <tr key={idx}>
                    <th>{metric.stat.name}</th>
                    <td>{metric.base_stat}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          <div className="card__abilities">
            <label htmlFor="moves">Move </label> 
            <select name="moves" id="card_moves"  className={`card__ability card--${pokemonData.types[0].type.name }`}> 
            {pokemonData.moves.map((item, idx) => {
              return(
              <option className="card__label" value={item.move.name} key={idx}> {idx} {item.move.name}</option>
              )
            })}
            </select>
          </div>
        </figcaption>
      </figure>
    </div>
  );
};

export default Card;
