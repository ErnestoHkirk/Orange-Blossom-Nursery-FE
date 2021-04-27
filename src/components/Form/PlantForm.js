import React, { Component } from 'react'
import { Form } from 'react-bootstrap'

export class PlantForm extends Component {
    render() {
        const plants =  this.props.plants;
        return (
            <Form>
                <label for="plant">Select Plant: </label>
                    <select name="plant" id="plant">
                        {plants.map(plant => {
                            return (<option value={plant.id}>{plant.plant_name}</option>)
                        })}      
                    </select>
                        <button onClick={()=> this.handleNewPlant()}>New Plant</button>
            </Form>
        )
    }
}

export default PlantForm
