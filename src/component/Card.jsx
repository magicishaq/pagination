import React from "react";

const Card = ({ pokemonData }) => {
  return (
    <div id="cards">
      <figure className={`card card--${pokemonData.types[0].type}`}>
        <div className="card__image-container">
          <img
            src={pokemonData.sprites.other['offical-artwork']}
            alt={pokemonData.name}
            className="card__image"
          />
        </div>

        <figcaption className="card__caption">
          <h1 className="card__name">{pokemonData.name}</h1>

          {pokemonData.types.map((entry) => {
            return <h3 className="card__type">{entry.type}</h3>;
          })}
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

export default Card