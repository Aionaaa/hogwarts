import React, {Component, Fragment} from 'react'

class CharacterBox extends Component{
  constructor(props){
    super(props)
    this.state = {characters: [],
    currentCharacter: null}
  }
}
  componentDidMount(){
    const url = "http://hp-api.herokuapp.com/api/characters";

    fetch(url)
    .then(res => res.json())
    .then(countries => this.setState({countries: countries}))
    .catch(err => console.error);
  }

export default CharacterBox;
