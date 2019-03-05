import btoa from 'btoa';

export default async ({ username, password, adminCode = '' }) => {
  const token = btoa(`${username}:${password}`);
  let headers = { Authorization: `Basic ${token}` };
  if (adminCode) {
    headers = { ...headers, 'admin-code': adminCode };
  }

  const response = await fetch(`${process.env.REACT_APP_AUTH_URL}/?ttl=30d`, {
    headers,
    mode: 'cors',
  });

  const body = await response.json();
  if (body.errors) {
    throw body.errors[0];
  }

  return body.data;
};
