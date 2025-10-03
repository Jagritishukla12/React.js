import axios from "axios";

const BASE_URL = "https://www.googleapis.com/youtube/v3";
const API_KEY = "YOUR_YOUTUBE_API_KEY"; // 👈 यहाँ अपना API Key डालो

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}&key=${API_KEY}`);
  return data;
};
