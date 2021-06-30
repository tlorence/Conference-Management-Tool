import { Axios } from ".";
import { USER } from "./endpoints";

export const addUser = (user) => {
    return Axios.post(USER+"addUser/", user);
};
export const getResearchpapers = () => {
  return Axios.get(USER+"getPapers/");
};
export const getWorkshopProposale = () => {
  return Axios.get(USER+"getProposals/");
};
