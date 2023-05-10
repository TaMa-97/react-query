// Todoリスト（テスト用API）のデータを取得するための関数
import axios from "axios";

const API_BASE_URL = "https://jsonplaceholder.typicode.com";

export const fetchTodos = async () => {
  const response = await axios.get(`${API_BASE_URL}/todos`);
  return response.data;
};
