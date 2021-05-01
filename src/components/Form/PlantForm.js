import React, { Component } from 'react'
import PlantDisplay from '../Display/plant-display';
import NewPlant from './NewPlant';
import { Form } from 'react-bootstrap'

export class PlantForm extends Component {
    constructor(props){
        super(props)
        const state = {
            selectedPlant:{},
            newPlant: false
        }
        this.state = state;
    }
    handlePlantChange = e => {
        const selected = this.props.plants[e.target.value -1];
        this.setState({selectedPlant: selected});
    }
    handleNewPlant = e => {
      e.preventDefault();
      this.setState({newPlant: true});
    }
    render() {
        const plants =  this.props.plants;
        return (
          <React.Fragment>
            <Form>  
                <label for="plant">Select Plant: </label>
                <select name="plant" id="plant" onChange={ (e)=> this.handlePlantChange(e)}>
                    <option value="none" selected disabled hidden >Select a Plant</option>
                    {plants.map(plant => {
                        return (<option key={plant.id}value={plant.id}>{plant.plant_name}</option>)
                    })}      
                </select>
                <button onClick={(e)=> this.handleNewPlant(e)}>New Plant</button>
                {Object.keys(this.state.selectedPlant).length !== 0 && <PlantDisplay data={this.state.selectedPlant}/>}
            </Form>
            {this.state.newPlant !== false && <NewPlant/>}
          </React.Fragment>
        )
    }
}

export default PlantForm
