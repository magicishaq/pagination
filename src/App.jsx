import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Pagination from "./component/Pagination";
import Post from "./component/Post";
import Card from "./component/Card";
import Header from "./component/Header";
import Footer from "./component/Footer";
import "./App.scss";
const url = "https://pokeapi.co/api/v2/pokemon?limit=151";
const App = () => {
  const [pokemon, setPokemon] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("wrong");
        }
      })
      .then((response) => setPokemon(response.results))
      .catch((error) => setError("true"));
  }, []);

  if (error) {
    return <div>{error}</div>;
  } else {
    return (
      <div className="App">
        <Router>
          <Header />
          <Switch>
            <Route path="/card/:id" component={()=><Card/>}>
              <Card />
            </Route>
            <Route path="/" component={()=><Pagination/>}>
              <div>
                {pokemon.length > 0 ? (
                  <>
                    <Pagination
                      pokemon={pokemon}
                      RenderComponent={Post}
                      title="Choose your Pokemon"
                      pageLimit={5}
                      dataLimit={10.2}
                    />
                  </>
                ) : (
                  <h1>No Posts to display</h1>
                )}
              </div>
            </Route>
          </Switch>
          <Footer />
        </Router>
      </div>
    );
  }
};

export default App;
