import config from "../config";
import TokenService from "./token-service";

const ApiService = {
  getAllPlants() {
    return fetch(`${config.API_ENDPOINT}/plant`, {
        method: "GET",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${TokenService.getAuthToken()}`
        }
      }).then(res =>
        !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
      );
  },
  getAllVendors() {
    return fetch(`${config.API_ENDPOINT}/vendor`, {
        method: "GET",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${TokenService.getAuthToken()}`
        }
      }).then(res =>
        !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
      );
  },
  getAllCustomers() {
    return fetch(`${config.API_ENDPOINT}/customer`, {
        method: "GET",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${TokenService.getAuthToken()}`
        }
      }).then(res =>
        !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
      );
  },
  postPlant(plant){
    return fetch(`${config.API_ENDPOINT}/plant`, {
      method: "POST",
      headers: {
        'content-type': 'application/json',
        'authorization': `Bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify( plant )
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },
  postCustomer(customer){
    return fetch(`${config.API_ENDPOINT}/customer`, {
      method: "POST",
      headers: {
        'content-type': 'application/json',
        'authorization': `Bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify( customer )
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },
  postNewOrder(order, customer, delivery){
    return fetch(`${config.API_ENDPOINT}/order`, {
      method: "POST",
      headers: {
        'content-type': 'application/json',
        'authorization': `Bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify( {order, customer,delivery} )
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },
  getOpenStatements(){
    return fetch(`${config.API_ENDPOINT}/statement`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${TokenService.getAuthToken()}`
      }
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },
  patchStatement(id, data){
    return fetch(`${config.API_ENDPOINT}/statement/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify( data )
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },
  deleteStatement(id){
    return fetch(`${config.API_ENDPOINT}/statement/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${TokenService.getAuthToken()}`
      }
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  }
};

export default ApiService;