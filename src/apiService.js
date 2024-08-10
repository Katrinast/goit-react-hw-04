import axios from "axios";
const ACCESS_KEY = "3qsuaG9aLOb2HenF2fvuZkhPMD2fwy4iZmfZ8KkdpEI";
  axios.defaults.baseURL = "https://api.unsplash.com";
  axios.defaults.headers.common["Authorization"] = `Client-ID ${ACCESS_KEY}`;
axios.defaults.params = {
  orientation: 'landscape',
  per_page: 15,
};

export async function fetchImages(query, page) {
  const { data } = await axios.get(`search?query=${query}&page=${page}`);
  return data;
}