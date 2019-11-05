import React, { Component } from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css'


class Pokedex extends Component {
    render(){
        let title;
        if(this.props.isWinner){
            title = <h1 className='Pokedex-winner'>Winning Pokemon!</h1>
        }else{
            title = <h1 className='Pokedex-loser'>Losing Pokemon!</h1>
        }
        return (
            <div className='Pokedex'>
            {title};
                <h4>Total Experience: {this.props.exp}</h4>
                <div className='Pokedex-cards'>
                {this.props.pokemon.map((x) => (
                    <Pokecard id={x.id} name={x.name} type={x.type} exp={x.base_experience} />                    
                ))}
                </div>
            </div>
        )
    }
}

export default Pokedex