import axios from "axios";

const API_BASE = "http://127.0.0.1:8000";

export async function sendChatMessage(query) {
  const response = await axios.post(`${API_BASE}/chat`, {
    query,
  });
  return response.data;
}