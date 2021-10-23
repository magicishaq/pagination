import React, {useState, useEffect} from 'react' 
const url = "https://pokeapi.co/api/v2/pokemon?limit=150"
const App = () => {
const[pokemon, setPokemon] = useState('');
const[error, setError] = useState('error');

useEffect(() => {

 fetch(url)
 .then(response => {
   if(response.ok){
     return response.json()
   }else{
     throw new Error('wrong')
   }
 })
 .then(response => setPokemon(response))
 .catch(error => setError('true'))

})

if(error) {
  return <div>{error}</div>
}else{
  return <div></div>
}
}

export default App