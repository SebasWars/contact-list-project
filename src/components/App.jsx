import { BrowserRouter } from "react-router-dom";
import AppRouter from "./AppRoutre";
import { FETCH_DATA } from "./utils/fecth";
import { useEffect, createContext, useReducer, useState } from "react";
import { reducerFunction } from "./utils/reducerFunction";

export const ContactContext = createContext();
const GET_DATA = "https://playground.4geeks.com/contact/agendas/Sebas/contacts";

function App() {
  const [state, dispatch] = useReducer(reducerFunction, []);
  const [query, setQuery] = useState("");

  useEffect(() => {
    FETCH_DATA(GET_DATA, "GET").then((response) => {
      dispatch({ type: "getContacts", payload: response });
    });
  }, []);

  return (
    <ContactContext.Provider value={{ state, dispatch, query, setQuery }}>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </ContactContext.Provider>
  );
}

export default App;
