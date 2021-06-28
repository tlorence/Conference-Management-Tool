import { Axios } from ".";
import { USER } from "./endpoints";

export const addUser = (user) => {
  return Axios.post(USER, user);
};
