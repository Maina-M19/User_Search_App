import axios from "axios";
import { API_URL } from "../config";

export const searchUsers = (q) => axios.get(`${API_URL}/users/search?q=${q}`);
export const getUserById = (id) => axios.get(`${API_URL}/users/${id}`);
