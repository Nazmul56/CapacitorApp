import axios from 'axios';
import Cookies from 'js-cookie';
import { business_info_api, get_shopify_configure_api, retailer_stripe_configuration_api, shopify_configure_api, shopify_disconnect_api } from '~~/const/api';
import { apiBaseUrl } from '~~/const/config';

export const fetchBusinessInfo = async () => {
    const token = Cookies.get('token');
    const response = await axios.get(`${apiBaseUrl}/${business_info_api}`, {
        headers: {
            Authorization: 'Bearer ' + token,
        },
    });
    return response.data;
};
export const onSaveBusinessInfo = async (data) => {
    const token = Cookies.get('token');
    const response = await axios.post(`${apiBaseUrl}/${business_info_api}`, data, {
        headers: {
            Authorization: 'Bearer ' + token,
        },
    });
    return response.data;
};
export const fetchAppDataInfo = async () => {
    const token = Cookies.get('token');
    const response = await axios.get(`${apiBaseUrl}/${get_shopify_configure_api}`, {
        headers: {
            Authorization: 'Bearer ' + token,
        },
    });
    return response.data;
};
export const sendAppDataInfo = async (data) => {
    const token = Cookies.get('token');
    const response = await axios.post(`${apiBaseUrl}/${shopify_configure_api}`, data, {
        headers: {
            Authorization: 'Bearer ' + token,
        },
    });
    return response.data;
};
export const shopifyDisconnect = async () => {
    const token = Cookies.get('token');
    const response = await axios.post(`${apiBaseUrl}/${shopify_disconnect_api}`, {}, {
        headers: {
            Authorization: 'Bearer ' + token,
        },
    });
    return response.data;
};
export const fetchStripeDataInfo = async () => {
    const token = Cookies.get('token');
    const response = await axios.get(`${apiBaseUrl}/${retailer_stripe_configuration_api}`, {
        headers: {
            Authorization: 'Bearer ' + token,
        },
    });
    return response.data;
};
export const onStripeSaveInfo = async (data) => {
    const token = Cookies.get('token');
    const response = await axios.post(`${apiBaseUrl}/${retailer_stripe_configuration_api}`, data, {
        headers: {
            Authorization: 'Bearer ' + token,
        },
    });
    return response.data;
};
