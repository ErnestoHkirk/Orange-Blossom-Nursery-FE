import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { EmployeeProvider } from './context/EmployeeContext';
import { VendorProvider} from './context/VendorContext';
import { PlantProvider} from './context/PlantContext';
import { CustomerProvider } from './context/CustomerContext';
import { StatementProvider} from './context/StatementContext';
import './index.css';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <EmployeeProvider>
        <StatementProvider>
          <VendorProvider>
            <CustomerProvider>
              <PlantProvider>
                < App />
              </PlantProvider>
            </CustomerProvider>
          </VendorProvider>
        </StatementProvider>
      </EmployeeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
