import axios from 'axios';
import {
    get_shopify_products_api,
    import_shopify_products_api,
    retailer_product_api, retailer_product_management, retailer_product_status_change, retailer_product_store
} from '~~/const/api';
import { apiBaseUrl } from '~~/const/config';
import Cookies from 'js-cookie';

export const fetchProductListByRetailerId = async (id, search = '', page = 1) => {
    console.log("id, search", id, search);
    const token = Cookies.get('token');
    const response = await axios.get(`${apiBaseUrl}/${retailer_product_api}/${id}?page=${page}&keyword=${search}`, {
        headers: {
            Authorization: 'Bearer ' + token,
        },
    });
    return response;
};

export const productListByRetailer = async (id, event_id) => {
    const token = Cookies.get('token');
    const response = await axios.get(`${apiBaseUrl}/${retailer_product_api}/${id}?event_id=${event_id}`, {
        headers: {
            Authorization: 'Bearer ' + token,
        },
    });
    return response.data;
};

export const fetchProductListByRetailer = async (page = 1) => {
    const token = Cookies.get('token');
    const response = await axios.get(`${apiBaseUrl}/${retailer_product_management}?page=${page}`, {
        headers: {
            Authorization: 'Bearer ' + token,
        },
    });
    return response;
};
export const productUnpublish = async (id) => {
    const token = Cookies.get('token');
    const response = await axios.post(`${apiBaseUrl}/${retailer_product_status_change}/${id}`, {}, {
        headers: {
            Authorization: 'Bearer ' + token,
        },
    });
    return response.data;
};
export const fetchShopifyProducts = async () => {
    const token = Cookies.get('token');
    const response = await axios.get(`${apiBaseUrl}/${get_shopify_products_api}`, {
        headers: {
            Authorization: 'Bearer ' + token,
        },
    });
    return response.data;
};
export const shopifyProductImport = async (products) => {
    const api = products == 'all' ? `${apiBaseUrl}/${import_shopify_products_api}?products=all` : `${apiBaseUrl}/${import_shopify_products_api}`
    const token = Cookies.get('token');
    const response = await axios.post(api, { products: products }, {
        headers: {
            Authorization: 'Bearer ' + token,
        },
    });
    return response.data;
};

export const createProduct = async (formData) => {
    const token = Cookies.get('token');
    const response = await axios.post(`${apiBaseUrl}/${retailer_product_store}`, formData, {
        headers: {
            Authorization: 'Bearer ' + token,
            accept: 'application/json',
            'Content-Type': `multipart/form-data; boundary=${formData._boundary}`
        },
    });
    return response.data;
};
