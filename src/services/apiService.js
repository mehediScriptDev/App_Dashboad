
import axiosInstance from "../config/axiosInstance";

 
export const get = async (endpoint, params = {}) =>
  axiosInstance.get(endpoint, { params });
 
 
export const post = async (endpoint, data) =>
  axiosInstance.post(endpoint, data);
 
 
export const put = async (endpoint, data) =>
  axiosInstance.put(endpoint, data);
 
 
export const del = async (endpoint) =>
  axiosInstance.delete(endpoint);
 
 
export const patch = async (endpoint, data) =>
  axiosInstance.patch(endpoint, data);