import { Axios } from ".";
import { CONFERENCE } from "./endpoints";

export const addConferernce = (conferences) => {
  return Axios.post(CONFERENCE+"add/", conferences);
};
export const getAllConferernce = () => {
  return Axios.get(CONFERENCE+"getAllConferences/");
};
