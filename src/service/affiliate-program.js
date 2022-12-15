import axios from 'axios';
import { apiBaseUrl } from '~~/const/config';
import Cookies from 'js-cookie';
import { affiliate_dashboard_api, affiliate_products_api, affiliate_products_event_add_api, affiliate_sales_earning_date_api, affiliate_sales_earning_product_api, affiliate_total_sale_api, affiliate_withwdrawal_dashboard_api, affiliate_withwdrawal_history_api, affiliate_withwdrawal_request_api } from '~~/const/api';

export const fetchDashboardData = async (page = 1) => {
  const token = Cookies.get('token');
  const response = await axios.get(
    `${apiBaseUrl}/${affiliate_dashboard_api}?page=${page}`,
    {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    }
  );
  return response.data;
};

export const fetchProductData = async (page = 1,sort = 'desc',filter, searchQuery) => {
  const token = Cookies.get('token');
  let baseUrl = `${apiBaseUrl}/${affiliate_products_api}?page=${page}&sort=${sort}`;
  if(filter != null){
    baseUrl = baseUrl + `&retailer_id=${filter}`;
  }
  if(searchQuery != null){
    baseUrl = baseUrl + `&keyword=${searchQuery}`;
  }
  const response = await axios.get(
    baseUrl,
    {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    }
  );
  return response;
};

export const addProductEvents = async (pid,eid) => {
  const body = {
    product_id: pid,
    event_id: eid,
  };
  const token = Cookies.get('token');
  const response = await axios.post(`${apiBaseUrl}/${affiliate_products_event_add_api}`, body, {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  });

  return response.data;
};

export const fetchAffiliateTotalSales = async (page = 1, query) => {

  const token = Cookies.get('token');
  let baseUrl = `${apiBaseUrl}/${affiliate_total_sale_api}?page=${page}`;
  if(query != null){
    baseUrl = baseUrl + `&order_number=${query}`;
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

export const fetchAffiliateWithdrawalDashboard = async () => {

  const token = Cookies.get('token');
  let baseUrl = `${apiBaseUrl}/${affiliate_withwdrawal_dashboard_api}`;
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

export const fetchAffiliateWithdrawalHistory = async (page = 1) => {

  const token = Cookies.get('token');
  let baseUrl = `${apiBaseUrl}/${affiliate_withwdrawal_history_api}?page=${page}`;
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

export const submitWithdrawRequest = async (body) => {
 
  const token = Cookies.get('token');
  const response = await axios.post(`${apiBaseUrl}/${affiliate_withwdrawal_request_api}`, body, {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  });

  return response.data;
};

export const fetchAffiliateSalesEarningDate = async (page = 1) => {

  const token = Cookies.get('token');
  let baseUrl = `${apiBaseUrl}/${affiliate_sales_earning_date_api}?page=${page}`;
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

export const fetchAffiliateSalesEarningProduct = async (page = 1,sort) => {

  const token = Cookies.get('token');
  let baseUrl = `${apiBaseUrl}/${affiliate_sales_earning_product_api}?page=${page}`;
  if(sort != null){
    baseUrl = baseUrl + `&sortby=${sort}`;
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