import axios from 'axios';
import { apiBaseUrl } from '~~/const/config';
import Cookies from 'js-cookie';
import {
  offer_list_api,
  offer_api,
  change_status_api,
  set_decission_api,
} from "~~/const/api";

export const fetchOffers = async () => {
  const token = Cookies.get("token");
  const response = await axios.get(`${apiBaseUrl}/${offer_list_api}`, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  return response.data;
};

export const acceptedOffers = async (data) => {
  const token = Cookies.get("token");
  const response = await axios.post(
    `${apiBaseUrl}/${offer_api}/${set_decission_api}`, data,
    {
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );
  return response.data;
};

export const declineOffers = async (data) => {
  const token = Cookies.get("token");
  const response = await axios.post(
    `${apiBaseUrl}/${offer_api}/${set_decission_api}`,
    data,
    {
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );
  return response.data;
};
