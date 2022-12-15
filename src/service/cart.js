import axios from "axios";
import Cookies from "js-cookie";
import { apiBaseUrl } from "~~/const/config";
import { cart_api, cart_get_list, remove_item_api } from "~~/const/api";

export const cartGetList = async () => {
  const token = Cookies.get("token");
  const response = await axios.get(
    `${apiBaseUrl}/${cart_api}/${cart_get_list}`,
    {
      headers: {
        Authorization: "Bearer " + token,
      },
    }
    );
    return response.data;
};


export const removeItem = async (id) => {
  const token = Cookies.get('token');
  const response = await axios.delete(
    `${apiBaseUrl}/${cart_api}/${remove_item_api}/${id}`,
    {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    }
  );
  return response.data;
}
