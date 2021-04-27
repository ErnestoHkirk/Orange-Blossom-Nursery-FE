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
  }
};

export default ApiService;