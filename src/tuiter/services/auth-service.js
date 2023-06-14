import axios from "axios";
const API_BASE = process.env.REACT_APP_SERVER_API_URL;
//const USERS_API = `${API_BASE}/users`; 
const USERS_API = `http://localhost:4000/api/users`;

const api = axios.create({ withCredentials: true });

export const login = async ({ username, password }) => {
  const response = await api.post(`${USERS_API}/login`, { username, password });
  const user = response.data;
  return user;
};

export const logout = async () => {
  const response = await api.post(`${USERS_API}/logout`);
  return response.data;
};
export const profile = async () => {
  const response = await api.post(`${USERS_API}/profile`);
  return response;
};
export const updateUser = async (user) => {
  const response = await api.put(`${USERS_API}/${user._id}`, user);
  return response.data;
};
export const register = async ({ username, password, firstName, lastName }) => {
    const response = await api.post(`${USERS_API}/register`, { username, password, firstName, lastName } );
    return response.data;
};
