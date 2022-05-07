import axios, { AxiosResponse } from "axios";

const getUsers = (): Promise<AxiosResponse> =>
  axios.get("https://jsonplaceholder.typicode.com/users?_limit=4");

export default getUsers;
