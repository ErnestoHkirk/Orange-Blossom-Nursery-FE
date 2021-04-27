import React, { createContext, Component } from 'react';
import apiService from '../services/api-service';

const VendorContext = createContext({
    vendors: [],
    error: null,
    setError: () => {},
    clearError: () => {},
    updateVendor: () => {}
});

export default VendorContext;

export class VendorProvider extends Component {
    constructor(props){
        super(props)
        const state = {
            vendors: [],
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
          await apiService.getAllVendors().then(vendors => {
              console.log('vendors', vendors);
             this.setState({ vendors });
          });
        }
        catch (error){
          console.log({ error });
        }
      };
    render() {
    const value = {
      vendors: this.state.vendors,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError
    };

    return (
      <VendorContext.Provider value={value}>
        {this.props.children}
      </VendorContext.Provider>
    )
  }
}