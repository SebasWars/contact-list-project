import { BrowserRouter } from "react-router-dom";
import AppRouter from "./AppRoutre";
import { FETCH_DATA } from "./utils/fecth";
import { useEffect, useState, createContext, useReducer } from "react";

export const ContactContext = createContext();


const reducerFunction = (state, action) => {
  const {type, payload} = action
  if(type === 'addContact'){
    return [...state, payload]
  }
  if(type === 'removeContact'){
    return state.filter((_, index) => index !== payload)
  }
  return state;
};

function App() {
  const [newListItem, setNewListItem] = useState([
    {
      address: "Carrer De Les Valls D'andorra, 2, Piso 1, Puerta 2",
      email: "sebasstian3015@gmail.com",
      name: "Sebastian Torres",
      phone: "673848272",
    },
  ]);
  const [state, dispatch ] = useReducer(reducerFunction, newListItem);

  /*   useEffect(() => {
    FETCH_DATA().then((response) => {
      setNewListItem(response);
    });
  }, []);
 */
  console.log(newListItem);
  return (
    <ContactContext.Provider value={{ state, dispatch }}>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </ContactContext.Provider>
  );
}

export default App;
