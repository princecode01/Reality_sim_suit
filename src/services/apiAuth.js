import axios from 'axios';

export async function login({ email, password }) {
  const options = {
    method: 'POST',
    url: 'https://login-signup.p.rapidapi.com/public/v1/login.php',
    headers: {
      'x-rapidapi-key': 'e93e82b48emsh26c7d1665e7d90fp189215jsn4ede803585b9',
      'x-rapidapi-host': 'login-signup.p.rapidapi.com',
      Origin: 'https://localhost:5173/'
    },
    data: {email, password, api_key: '394e9338b73a9f061b1968ceaa050a'}
  };

  try {
    const {data} = await axios.request(options);
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}


export async function signUp({ email, password, name }) {
  const options = {
    method: 'POST',
    url: 'https://login-signup.p.rapidapi.com/public/v1/signup.php',
    headers: {
      'x-rapidapi-key': 'e93e82b48emsh26c7d1665e7d90fp189215jsn4ede803585b9',
      'x-rapidapi-host': 'login-signup.p.rapidapi.com',
      Origin: 'http://localhost:5173/'
    },
    data: {email, password, name, api_key: '394e9338b73a9f061b1968ceaa050a'}
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
}
