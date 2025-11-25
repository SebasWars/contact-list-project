/*
const UDPATE_DATA =
  "https://playground.4geeks.com/contact/agendas/Sebas/contacts/id";
 */
export const FETCH_DATA = async (url, method, body) => {
  const options = {
    method,
    headers: {
      "Content-Type": "application/json",
    },
  };

  if (body && (method === "POST" || method === "PUT")) {
    options.body = JSON.stringify(body);
  }

  const response = await fetch(url, options);
  const text = await response.text();

  const data = text ? JSON.parse(text) : null;

  if (data && Array.isArray(data.contacts)) return data.contacts;
  if (Array.isArray(data)) return data;

  return data;
};
