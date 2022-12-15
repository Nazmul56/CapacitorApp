import axios from 'axios';
import { apiBaseUrl } from '~~/const/config';
import Cookies from 'js-cookie';
import { notification_api, notification_delete_api } from '~~/const/api';

export const fetchNotification = async (page = 1) => {
  const token = Cookies.get('token');
  const response = await axios.get(`${apiBaseUrl}/${notification_api}?page=${page}`, {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  });
  return response.data;
};

export const deleteNotification = async (id) => {
  const token = Cookies.get('token');
  const response = await axios.delete(
    `${apiBaseUrl}/${notification_delete_api}/${id}`,
    {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    }
  );
  return response.data;
};
