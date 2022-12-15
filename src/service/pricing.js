import axios from 'axios';
import Cookies from 'js-cookie';
import { pricing_api } from '~~/const/api';
import { apiBaseUrl } from '~~/const/config';

export const fetchPricing = async () => {
  const token = Cookies.get('token');
  const response = await axios.get(`${apiBaseUrl}/${pricing_api}`, {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  });
  return response.data;
};
