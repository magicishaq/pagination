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
console.log(pokemonData)
  if(!loading){
      return (<div>hello world</div>)
  }
  return (
    <div id="cards">
      <figure className={`card card--${pokemonData.types[0].type.name }`}>
        <div className="card__image-container">
          <img
            src={pokemonData.sprites.other["offical-artwork"]}
            alt={pokemonData.name}
            className="card__image"
          />
        </div>

        <figcaption className="card__caption">
          <h1 className="card__name">{pokemonData.name}</h1>
          <h3 className="card__type">
          {pokemonData.types.map((entry) => {
          return <span>{entry.type.name} </span> ;
          })}
          </h3>
          <table className="card__stats">
            <tbody>
              {pokemonData.stats.map((metric) => {
                return (
                  <tr>
                    <th>{metric.stat.name}</th>
                    <td>{metric.base_stat}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          <div className="card__abilities">
            <h4 className="card__ability">
              <span className="card__label">Move One</span>
              {pokemonData.moves[0].move.name}
            </h4>
            <h4 className="card__ability">
              <span className="card__label">Move Two</span>
              {pokemonData.moves[0].move.name}
            </h4>
          </div>
        </figcaption>
      </figure>
    </div>
  );
};

export default Card;
