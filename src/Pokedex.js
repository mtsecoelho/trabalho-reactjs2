import React, { Component } from 'react';

class Pokedex extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: '',
            pokemons: [ 
            {name: 'Pikachu', description: 'Pokemon Elétrico', image: 'images/Pikachu.jpg'}, 
            {name: 'Bulbasauro', description: 'Pokemon Planta', image: 'images/Bulbasauro.jpg'}, 
            { name: 'Chamander', description: 'Pokemon de Fogo', image: 'images/Chamander.jpg'}
            ]
        }
        this.onSubmit = this.onSubmit.bind(this);
    }

    removePokemon() {
        let newPokemons = this.state.pokemons;
        newPokemons.splice(this.state.selected,1);
        this.setState({selected: '', pokemons: newPokemons});
        document.getElementById("pokemonForm").reset();
    }

    setSelected(index) {
        this.setState({selected: index})
        document.getElementById("id").value = index;
        document.getElementById("name").value = this.state.pokemons[index].name;
        document.getElementById("description").value = this.state.pokemons[index].description;
    }

    onSubmit(e) {
        e.preventDefault();
        let newPokemons = this.state.pokemons;
        let index = document.getElementById("id").value;
        if (!index) {
            newPokemons.push({ name: e.target.name.value, description: e.target.description.value, image: 'images/' +  e.target.name.value + '.jpg'});
        } else {
            newPokemons[index].name = e.target.name.value;
            newPokemons[index].description = e.target.description.value;
        }
        this.setState({pokemons: newPokemons});
        document.getElementById("pokemonForm").reset();
    }
    render() {
        return (
            <div>
                <div className="row">
                    <form onSubmit={this.onSubmit} id="pokemonForm">
                        <input type="text" id="id" style={{display: 'none'}}/>
                        <label htmlFor='name'>Name</label>
                        <input type="text" id='name' name='name' />
                        <label htmlFor='description'>Description</label>
                        <input type="text" id='description' name='description' />
                        <div className='center-align'><button type='submit'>Save</button></div>
                    </form>
                </div>
                <div className="row">
                    {
                        this.state.pokemons.map((pokemon, index) => (
                            <div className='col s12 m12' key={index} onClick={() => this.setSelected(index)}>
                                <div className='col s12 m6 l4'>
                                    <img height="42" width="42" src={pokemon.image} alt={pokemon.name} />
                                </div>
                                <div className='col s12 m6 l4'>
                                    {pokemon.name}
                                </div>
                                <div className='col s12 m12 l4'>
                                    {pokemon.description}
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="row">
                    <div className='center-align'><button onClick={() => this.removePokemon()}>Remove</button></div>                
                </div>
            </div>
        )
    }
}

export default Pokedex;