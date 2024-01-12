import api from "../plugins/axios";
import { loginCredentials } from "../modules/types";

const url = import.meta.env.VITE_BASE_URL;

function signin(data: loginCredentials) {
  return api.post(url + "/admin/signin", data);
}

export { signin };
