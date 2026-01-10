import api from "./axios";

export async function fetchPosts() {
  const res = await api.get("/posts");
  return res.data;
}
