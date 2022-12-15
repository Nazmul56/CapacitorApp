import axios from 'axios';
import { apiBaseUrl } from '~~/const/config';
import Cookies from 'js-cookie';
import { dropdown_brand_api, dropdown_category_api, retailer_product_attributes_api } from '~~/const/api';

export const fetchDropdownAllCategory = async () => {
  const token = Cookies.get('token');
  const response = await axios.get(`${apiBaseUrl}/${dropdown_category_api}`, {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  });
  return response.data;
};

export const fetchAllBrand = async () => {
  const token = Cookies.get('token');
  const response = await axios.get(`${apiBaseUrl}/${dropdown_brand_api}`, {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  });
  return response.data;
};

export const fetchParentCategory = async (page = 1) => {
  const token = Cookies.get('token');
  const response = await axios.get(`${apiBaseUrl}/${all_category_api}?page=${page}`, {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  });
  return response.data;
};

export const fetchSubCategory = async (page = 1) => {
  const token = Cookies.get('token');
  const response = await axios.get(`${apiBaseUrl}/${all_category_api}?page=${page}`, {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  });
  return response.data;
};

export const fetchAttributeList = async () => {
  const token = Cookies.get('token');
  const response = await axios.get(`${apiBaseUrl}/${retailer_product_attributes_api}`, {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  });
  return response.data;
};

export const createAttributeList = async (data) => {
  const token = Cookies.get('token');
  const response = await axios.post(`${apiBaseUrl}/${retailer_product_attributes_api}`, data, {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  });
  return response.data;
};




// export const deleteNotification = async (id) => {
//   const token = Cookies.get('token');
//   const response = await axios.delete(
//     `${apiBaseUrl}/${notification_delete_api}/${id}`,
//     {
//       headers: {
//         Authorization: 'Bearer ' + token,
//       },
//     }
//   );
//   return response.data;
// };
