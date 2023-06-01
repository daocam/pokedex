import { useState, useEffect } from 'react';
import PokemonForm from '../components/pokemon-form';
import Pokemon from '../models/pokemon';
import { useParams } from 'react-router-dom';
import PokemonService from '../services/pokemon-service';
import Loader from '../components/loader';
 
type Params = { id: string };
  
const PokemonEdit = () => {
    
  const [pokemon, setPokemon] = useState<Pokemon|null>(null);
  const params = useParams<Params>()
  
  useEffect(() => {
    if (params.id) {
      PokemonService.getPokemon(+params.id).then(pokemon => setPokemon(pokemon))
    }
  }, [params.id]);
    
  return (
    <div>
      { pokemon ? (
        <div className="row">
            <h2 className="header center">Éditer { pokemon.name }</h2>
            <PokemonForm pokemon={pokemon} isEditForm={true}></PokemonForm>
        </div>
      ) : (
        <h4 className="center"><Loader/></h4>
      )}
    </div>
  );
}
  
export default PokemonEdit;