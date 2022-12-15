import axios from 'axios';
import { apiBaseUrl } from '~~/const/config';
import Cookies from 'js-cookie';
import { retailer_shipping_methods__api, services_api } from '~~/const/api';

export const fetchShippingMethood = async (page = 1) => {
  const token = Cookies.get('token');
  const response = await axios.get(
    `${apiBaseUrl}/${retailer_shipping_methods__api}?page=${page}`,
    {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    }
  );
  return response.data;
};

export const addShippingMethood = async (data) => {
  const body = {
    name: data.name,
    shipping_cost: data.shipping_cost,
    delivery_days: data.delivery_days,
    is_default: data.is_default ? 1 : 0,
  };
  const token = Cookies.get('token');
  const response = await axios.post(
    `${apiBaseUrl}/${retailer_shipping_methods__api}`,
    body,
    {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    }
  );

  return response.data;
};

export const editShippingMethood = async (data, status) => {
  const body = {
    name: data.name,
    shipping_cost: data.shipping_cost,
    delivery_days: data.delivery_days,
    is_default: data.is_default ? 1 : 0,
  };
  const token = Cookies.get('token');
  const response = await axios.put(
    `${apiBaseUrl}/${retailer_shipping_methods__api}/${data.id}`,
    body,
    {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    }
  );
  return response.data;
};

export const deleteShippingMethood = async (id) => {
  const token = Cookies.get('token');
  const response = await axios.delete(
    `${apiBaseUrl}/${retailer_shipping_methods__api}/${id}`,
    {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    }
  );
  return response.data;
};

export const defaultShippingMethood = async (id) => {
  const token = Cookies.get('token');
  const response = await axios.post(
    `${apiBaseUrl}/retailer-shipping-methods-make-default/${id}`,
    { id },
    {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    }
  );
  return response.data;
};
