import axios from "axios";
import { authHeader } from "../helpers/authHelper";

//  Created an axios instance and will be used for all the API calls
const axiosApi = axios.create({
  baseURL: `https://fakestoreapi.com/products`, // API base URL
});
export const axiosInstance = axiosApi;
// Get method function to get the data from the API
export async function get(url, config = {}) {
  return await axiosApi
    .get(url, { params: config, headers: authHeader() })
    .then((response) => response)
    .catch((error) => error.response);
}

// Patch method function to update the data in the API
export async function patch(url, data, config = {}) {
  return await axiosApi
    .patch(url, { ...data }, { ...config })
    .then((response) => response)
    .catch((error) => error.response);
}

// Post method function to add the data in the API
export async function post(url, data, config = {}) {
  return axiosApi
    .post(url, { ...data }, { ...config, headers: authHeader() })
    .then((response) => response)
    .catch((error) => error.response);
}
// Put method function to update the data in the API
export async function put(url, data, config = {}) {
  return axiosApi
    .put(url, { ...data }, { ...config })
    .then((response) => response);
}
// Delete method function to delete the data from the API
export async function del(url, config = {}) {
  return await axiosApi.delete(url, { ...config }).then((response) => response);
}
