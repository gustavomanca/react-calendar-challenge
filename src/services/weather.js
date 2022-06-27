import { api, key } from "./api";

const BASE_URL = `/currentconditions/v1`;

export async function getCurrentConditions(cityKey) {
  const response = await api.get(`${BASE_URL}/${cityKey}?apikey=${key}`);
  return response;
}
