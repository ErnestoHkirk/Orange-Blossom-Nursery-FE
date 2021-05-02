import React, { createContext, Component } from 'react';
import apiService from '../services/api-service';

const PlantContext = createContext({
  plants: [],
  order: [],
  addPlant: () => {},
  addToOrder: ()=> {},
  clearOrder: ()=> {},
  error: null,
  setError: () => { },
  clearError: () => { },
  updatePlantData: () => { }
});

export default PlantContext;

export class PlantProvider extends Component {
  constructor(props) {
    super(props)
    const state = {
      plants: [],
      order: [],
      error: null
    }
    this.state = state;
  }

  setError = error => {
    this.setState({ error });
  };

  clearError = () => {
    this.setState({ error: null });
  };

  async componentDidMount() {
    try {
      await apiService.getAllPlants().then(plants => {
         this.setState({ plants});
         console.log('plants', plants)
      });
    }
    catch (error){
      console.log({ error });
    }
  };
  addPlant = plant => {
    console.log('here22')
    const plantList = [...this.state.plants];
    const id = this.state.plants.length + 1;
    plant.id = id;
    plantList.push(plant);
    this.setState({plants: plantList});
  }
  addToOrder = (id,quantity) => {
    const orderList = [...this.state.order];
    const plantList = [...this.state.plants];
    const findPlant = plantList.find(el => el.id === id);
    findPlant.quantity = quantity;
    orderList.push(findPlant);
    this.setState({order: orderList});
  }
  clearOrder = () => {
    this.setState({order: []});
  }

  render() {
    const value = {
      plants: this.state.plants,
      order: this.state.order,
      error: this.state.error,
      addToOrder: this.addToOrder,
      clearOrder: this.clearOrder,
      addPlant: this.addPlant,
      setError: this.setError,
      clearError: this.clearError
    };

    return (
      <PlantContext.Provider value={value}>
        {this.props.children}
      </PlantContext.Provider>
    )
  }
}