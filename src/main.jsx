import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { DataProvider } from './context/DataContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DataProvider>
    <App />
    </DataProvider>
  </React.StrictMode>,
)

//Envolviendo el DataProvider en nuestro App, hago que nuestros demas componentes o todos los hijos de main
//escuchen o conozcan los estados que compartimos en el value del DataProvider es decir value={{ setQuery, isLoading, error, data }}
