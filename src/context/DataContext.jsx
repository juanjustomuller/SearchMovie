import { createContext, useState } from "react";
import { useFetch } from "../hooks/useFetch";

export const DataContext = createContext();

//para que los demas componentes puedan acceder a los estados del hook
export const DataProvider = ({ children }) => {
  const [query, setQuery] = useState("superman");
  const { isLoading, error, data } = useFetch(`&s=${query}`); //llamamos a nuestro hook y le pasamos el query que va a ir cambiando(serian los nombres de las peliculas)
  console.log("Data in DataContext:", data);
  
  return (
    <DataContext.Provider value={{ setQuery, isLoading, error, data }}>
      {children}
    </DataContext.Provider>
  );
};

//en el value del provider pongo los estados que quiero que se compartan en los demas componentes
