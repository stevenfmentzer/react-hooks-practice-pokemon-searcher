import React, {useState} from "react";
import { Form } from "semantic-ui-react";

function PokemonForm( {gotcha} ) {

  let initObj ={
    "name": "",
    "hp": 0,
    "sprites": {
      "front": "",
      "back": ""
  }}

  const [formData, setFormData] = useState(initObj)

  function handleChange(event){
    const {name, value} = event.target
    console.log(event.target.value)
    setFormData({...formData, [name] : value})
  }

  function handleSubmit(event){
    event.preventDefault()
    
    fetch("http://localhost:3001/pokemon",{
      method : "POST",
      headers : {
        "Content-type" : "application/json"},
      body : JSON.stringify(formData)
    })
    .then(res => res.json())
    .then(data => gotcha(data))
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" onChange={handleChange} value={formData.name} />
          <Form.Input fluid label="hp" placeholder="hp" name="hp" onChange={handleChange} value={formData.hp} />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            onChange={handleChange}
            value={formData.sprites[0]} 
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            onChange={handleChange}
            value={formData.sprites[1]} 
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
