import React, {Component, Fragment} from 'react'
import CharacterSelector from '../components/CharacterSelector'
import CharacterDetail from '../components/CharacterDetail'

class CharacterBox extends Component{
  constructor(props){
    super(props);
    this.state = {characters: [],
    currentCharacter: null};
    this.handleCharacterSelected = this.handleCharacterSelected.bind(this)
  }

  componentDidMount(){
    const url = "http://hp-api.herokuapp.com/api/characters";

    fetch(url)
    .then(res => res.json())
    .then(characters => this.setState({characters: characters}))
    .catch(err => console.error);
  }

  handleCharacterSelected(index){
    const selectedCharacter = this.state.characters[index];
    this.setState({currentCharacter: selectedCharacter})
  }

  render(){
    return(
      // <h2>CharacterBox</h2>
      <CharacterSelector
      characters={this.state.characters}
      onCharacterSelected={this.handleCharacterSelected}/>
      // <CharacterDetail character={this.state.currentCharacter}/>
    );
  }
}
export default CharacterBox;
