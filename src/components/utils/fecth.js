const GET_DATA = 'https://playground.4geeks.com/contact/agendas/Sebas/contacts';
const REMOVE_DATA = 'https://playground.4geeks.com/contact/agendas/Sebas/contacts/id'
const UDPATE_DATA = 'https://playground.4geeks.com/contact/agendas/Sebas/contacts/id'
const POST_DATA = 'https://playground.4geeks.com/contact/agendas/Sebas/contacts'

export const FETCH_DATA = async () => {
  const response = await fetch(GET_DATA,{
/*     method: 'POST',
    body: JSON.stringify(),
    headers: {
        "Content-Type": "application/json"
      } */
  });
  const data = await response.json();
  return data;
};
