import axios from 'axios';
import {
    fetch_retailer_order_by_id,
    retailer_list_api,
    retailer_order_list_api,
    retailer_order_status_change
} from '~~/const/api';
import { apiBaseUrl } from '~~/const/config';
import Cookies from 'js-cookie';

export const fetchRetailerOrder = async (page = 1, text) => {
    const token = Cookies.get('token');
    const response = await axios.get(text != '' ? `${apiBaseUrl}/${retailer_order_list_api}?page=${page}&order_number=${text}` : `${apiBaseUrl}/${retailer_order_list_api}?page=${page}`, {
        headers: {
            Authorization: 'Bearer ' + token,
        },
    });
    return response;
};

export const fetchRetailerList = async () => {
    const token = Cookies.get('token');
    const response = await axios.get(`${apiBaseUrl}/${retailer_list_api}`, {
        headers: {
            Authorization: 'Bearer ' + token,
        },
    });
    return response.data;
};

export const fetchRetailerListWithSearch = async (searchQuery) => {
    const token = Cookies.get('token');
    let baseUrl = `${apiBaseUrl}/${retailer_list_api}`;
    if(searchQuery != null){
      baseUrl = baseUrl + `?keyword=${searchQuery}`;
    }
    const response = await axios.get(
      baseUrl,
      {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      }
    );
    return response.data;
  };

export const fetchRetailerOrderById = async (id) => {
    const token = Cookies.get('token');
    const response = await axios.get(`${apiBaseUrl}/${fetch_retailer_order_by_id}/${id}`, {
        headers: {
            Authorization: 'Bearer ' + token,
        },
    });
    return response.data;
};

export const changeRetailerOrderStatus = async (orderId, status, data) => {
    const token = Cookies.get('token');
    const response = await axios.post(`${apiBaseUrl}/${retailer_order_status_change}/${orderId}/${status}`, data, {
        headers: {
            Authorization: 'Bearer ' + token,
        },
    });
    return response.data;
};

export const fetchRetailerListBasic = async () => {
    const token = Cookies.get('token');
    const response = await axios.get(`${apiBaseUrl}/select-dropdown/retailer-list`, {
        headers: {
            Authorization: 'Bearer ' + token,
        },
    });
    return response.data;
};