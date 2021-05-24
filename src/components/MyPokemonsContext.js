import React from "react";

export const MyPokemonsContext = React.createContext();

export const MyPokemonsProvider = ({ children }) => {
  const [myPokemons, setMyPokemons] = React.useState([]);
 
  return (
    <MyPokemonsContext.Provider
      value={{
        myPokemons,
        setMyPokemons,
      }}>
      {children}
    </MyPokemonsContext.Provider>
  );
};