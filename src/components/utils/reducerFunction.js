export const reducerFunction = (state, action) => {
  const { type, payload } = action;
  if (type === "getContacts") {
    return payload;
  }
  if (type === "addContact") {
    return [...state, payload];
  }
  if (type === "removeContact") {
    return state.filter((contact) => contact.id !== payload);
  }
  if (type === "editContact") {
    return state.map((contact) =>
      contact.id === payload.id ? payload : contact
    );
  }
  return state;
};
