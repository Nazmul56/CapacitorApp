import axios from 'axios';
import { outfit_api } from '~~/const/api';
import { apiBaseUrl } from '~~/const/config';
import Cookies from 'js-cookie';

export const fetchOutfit = async () => {
  const token = Cookies.get('token');
  const response = await axios.get(`${apiBaseUrl}/${outfit_api}`, {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  });
  return response.data;
};

export const deleteOutfit = async (id) => {
  const token = Cookies.get('token');
  const response = await axios.delete(`${apiBaseUrl}/outfits/${id}`, {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  });
  return response.data;
};
