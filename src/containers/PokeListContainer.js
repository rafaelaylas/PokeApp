import React, {Component}  from 'react';
import List from '../components/List';
import axios from 'axios';
import AppNav from '../components/AppNav';

class PokeListContainer extends Component{
   //alamacenamos en el estado
    state = {
        pokeData: []
    }
    componentDidMount(){
        axios.get('https://pokeapi.co/api/v2/pokemon')
        .then(res => {
            const pokeData = res.data.results;
            
            //actualizamos el estado
            this.setState({
                pokeData
            })
        })
        .catch(error => console.log(error))
    }
    render(){
        //Destructuramos porque solamente queremos pokedata del state
        const {pokeData} = this.state;

        return (                
            <>
                <AppNav/>
                <List pokedata={pokeData}/>
             </>
        )
    }
}

export default PokeListContainer;