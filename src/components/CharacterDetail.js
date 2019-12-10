import React from 'react';

const CharacterDetail = (props) => {
  if(!props.character) return null;

  return(
    <div>
    <h3>
    {props.character.name}
    <br></br>
    </h3>
    <img src={props.character.image}/>
    </div>
  )
}

export default CharacterDetail
