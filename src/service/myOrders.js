import axios from 'axios';
import Cookies from 'js-cookie';
import {
    my_orders_api, my_order_derails_api
} from '~~/const/api';
import { apiBaseUrl } from '~~/const/config';

export const fetchRetailerOrder = async (page = 1, text) => {
    const token = Cookies.get('token');
    const response = await axios.get(text != '' ? `${apiBaseUrl}/${my_orders_api}?page=${page}&order_number=${text}` : `${apiBaseUrl}/${my_orders_api}?page=${page}`, {
        headers: {
            Authorization: 'Bearer ' + token,
        },
    });
    return response;
};

export const fetchRetailerOrderById = async (id) => {
    const token = Cookies.get('token');
    const response = await axios.get(`${apiBaseUrl}/${my_order_derails_api}/${id}`, {
        headers: {
            Authorization: 'Bearer ' + token,
        },
    });
    return response.data;
};
