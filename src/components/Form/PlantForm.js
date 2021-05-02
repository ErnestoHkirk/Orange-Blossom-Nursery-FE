import React, { Component } from 'react'
import PlantDisplay from '../Display/plant-display';
import NewPlant from './NewPlant';
import { Form } from 'react-bootstrap'

export class PlantForm extends Component {
    static defaultProps = {
        addNewPlant: () => {},
        addPlantOrder: () => {}
    }
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
    handlePlantAddSucess = plant => {
        const idx = this.props.plants.length;
        this.props.addNewPlant(plant);
        const selected = this.props.plants[idx];
        this.setState({newPlant: false, selectedPlant: selected});
    }
    handlePlantAdd = (e) => {
        e.preventDefault();
        const id = this.state.selectedPlant.id;
        const quantity = e.target.quantity.value;
        this.props.addPlantOrder(id, quantity);
    }
    renderButtons = () => {
        return (<div>
            <label   className="mr-4" htmlFor="quantity">Quantity: </label>
            <input   className="mr-4" name="quantity" required/>  
            <button   className="btn btn-primary" type="submit">Add Plant</button>
        </div>)
    }
    closePlantModal = () => {
        this.setState({newPlant: false})
    }
    render() {
        const plants =  this.props.plants;
        return (
          <React.Fragment>
            <Form className="form-row" onSubmit={this.handlePlantAdd}>
                <div className="form-group col-md-12">
                    <label  className="mr-4" for="plant">Select Plant: </label>
                    <select  className="mr-4" name="plant" id="plant" onChange={ (e)=> this.handlePlantChange(e)}>
                        <option value="none" selected disabled hidden >Select a Plant</option>
                        {plants.map(plant => {
                            return (<option key={plant.id}value={plant.id}>{plant.plant_name}</option>)
                        })}      
                    </select>
                    <button  className="btn btn-primary" onClick={(e)=> this.handleNewPlant(e)}>New Plant</button>
                </div>
                {Object.keys(this.state.selectedPlant).length !== 0 && <PlantDisplay data={this.state.selectedPlant}/>}
                {Object.keys(this.state.selectedPlant).length !== 0 && this.renderButtons()}
            </Form>
            {this.state.newPlant !== false && <NewPlant closePlantModal={this.closePlantModal} onPlantAddSuccess={this.handlePlantAddSucess}/>}
          </React.Fragment>
        )
    }
}

export default PlantForm
