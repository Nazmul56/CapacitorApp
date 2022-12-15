import axios from 'axios';
import Cookies from 'js-cookie';
import { influencer_list_api } from '~~/const/api';
import { apiBaseUrl } from '~~/const/config';

export const fetchInfluencerList = async (page = 1, keyword) => {
    const api = keyword.trim() != "" ? `${apiBaseUrl}/${influencer_list_api}?page=${page}&keyword=${keyword}` : `${apiBaseUrl}/${influencer_list_api}?page=${page}`
    const token = Cookies.get('token');
    const response = await axios.get(api, {
        headers: {
            Authorization: 'Bearer ' + token,
        },
    });
    return response.data;
};
