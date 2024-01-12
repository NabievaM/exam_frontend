import api from "../plugins/axios";
import { user } from "../modules/interfaces";

const url = import.meta.env.VITE_BASE_URL;

export function getUserList() {
  return api.get(url + "/user/findall");
}

export function userAddData(user: user) {
  return api.post(url + `/user/create`, user);
}
