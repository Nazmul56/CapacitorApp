import axios from 'axios';
import { apiBaseUrl } from '~~/const/config';
import Cookies from 'js-cookie';
import { services_api } from '~~/const/api';

export const fetchServices = async (page = 1) => {
  const token = Cookies.get('token');
  const response = await axios.get(
    `${apiBaseUrl}/${services_api}?page=${page}`,
    {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    }
  );
  return response.data;
};

export const addServices = async (data, status) => {
  const body = {
    title: data.title,
    rate: data.rate,
    description: data.description,
    status: status,
  };
  const token = Cookies.get('token');
  const response = await axios.post(`${apiBaseUrl}/${services_api}`, body, {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  });

  return response.data;
};

export const editServices = async (data, status) => {
  const body = {
    title: data.title,
    rate: data.rate,
    description: data.description,
    status: status,
  };
  const token = Cookies.get('token');
  const response = await axios.put(
    `${apiBaseUrl}/${services_api}/${data.id}`,
    body,
    {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    }
  );
  return response.data;
};

export const deleteService = async (id) => {
  const token = Cookies.get('token');
  const response = await axios.delete(`${apiBaseUrl}/${services_api}/${id}`, {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  });
  return response.data;
};
