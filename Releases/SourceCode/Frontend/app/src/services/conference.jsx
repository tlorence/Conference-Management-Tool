import { Axios } from ".";
import { CONFERENCE } from "./endpoints";

export const addConferernce = (conferences) => {
  return Axios.post(CONFERENCE, conferences);
};
