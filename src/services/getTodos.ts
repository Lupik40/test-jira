import axios, { AxiosResponse } from "axios";

const getTodos = (): Promise<AxiosResponse> =>
  axios.get("https://jsonplaceholder.typicode.com/todos?_limit=4");

export default getTodos;
