import React, { createContext, Component } from 'react';
import apiService from '../services/api-service';

const PlantContext = createContext({
  plants: [],
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
      });
    }
    catch (error){
      console.log({ error });
    }
  };

  render() {
    const value = {
      plants: this.state.plants,
      error: this.state.error,
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