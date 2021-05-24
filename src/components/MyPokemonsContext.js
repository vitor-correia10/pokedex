import React from "react";

export const MyPokemonsContext = React.createContext();

export const MyPokemonsProvider = ({ children }) => {
  const [myPokemons, setMyPokemons] = React.useState([]);

  console.log('*** myPokemons', myPokemons)
 
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