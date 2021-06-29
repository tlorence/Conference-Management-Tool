import { Axios } from ".";
import { USER } from "./endpoints";

export const addUser = (user) => {
  debugger
  return Axios.post(USER+"addUser/", user);
};
