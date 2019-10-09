import React, {Fragment} from 'react'
import PokeCard from './PokeCard';
import {Grid} from '@material-ui/core';
function List({ pokedata }) {
    return (
        <Fragment>
         
            <h1>Lista de Pokemons</h1>
            <Grid container justify="center">
                {pokedata.map((pokemon, index) => {
                    let url = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other-sprites/official-artwork/"
                    console.log(pokemon);
                    let pokeIndex = pokemon.url.split('/')[pokemon.url.split('/').length - 2];
                    {/* console.log(pokeIndex); */}
                    return <PokeCard to={`/poke-info/${pokeIndex}/${pokemon.name}`} name={pokemon.name} image={`${url}${pokeIndex}.png?raw=true`}/>   
                })}
           </Grid>
        </Fragment>
    )
}

export default List;