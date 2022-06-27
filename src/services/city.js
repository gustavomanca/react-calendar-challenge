import { api, key } from "./api";

const BASE_URL = `/locations/v1/cities/search`;

export async function getCityKey(query) {
  const response = await api.get(
    `${BASE_URL}?apikey=${key}&q=${query.toLowerCase()}`
  );
  return response;
}
