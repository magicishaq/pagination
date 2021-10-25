import React,{useEffect, useState} from 'react'
import defaultLogo from '../images/Pokemon-Logo.png'


const Post = ({pokemon}) => {
   const {name, url} = pokemon //get the data for the specific pokemon
   const [pokemonData, setPokemonData] = useState({}); 
   const [loaded, setLoaded] = useState(false)
   const [error, setError] = useState(null)

    useEffect(() => {
        fetch(url).then(response => {
            if(response.ok){
                return response.json()
            }else{
            throw new Error(`couldn't find the pokemon`) 
            }
        }).then(response => setPokemonData(response)).then(response => setLoaded(true)).catch(error => setError(error))
        
    }, [name, url])

    return(
        <div className="post">
            <h1> {name} </h1>
            <small> {pokemonData.id} </small>
             <div className="post_image">
                 <img src={loaded ? pokemonData.sprites.front_default : defaultLogo} alt={`${name}-sprite`} />
            </div>   
        </div>
    )
}

export default Post