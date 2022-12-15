import axios from 'axios';
import {
    expert_list_api, send_work_invitation_api,
} from '~~/const/api';
import { apiBaseUrl } from '~~/const/config';
import Cookies from 'js-cookie';

export const fetchExpert = async (filter, sort, searchText, page = 1) => {
    const token = Cookies.get('token');
    const api = searchText?.trim() != '' ? `${apiBaseUrl}/${expert_list_api}?page=${page}&filter=price&min=${filter?.min}&max=${filter?.max}&name=${searchText}&filter=time&sort=${sort}` : `${apiBaseUrl}/${expert_list_api}?page=${page}&filter=price&min=${filter?.min}&max=${filter?.max}&filter=time&sort=${sort}`
    const response = await axios.get(api, {
        headers: {
            Authorization: 'Bearer ' + token,
        },
    });
    return response.data;
};
export const sendInvite = async (data) => {
    const token = Cookies.get('token');
    const api = `${apiBaseUrl}/${send_work_invitation_api}`
    const response = await axios.post(api, data, {
        headers: {
            Authorization: 'Bearer ' + token,
        },
    });
    return response.data;
};
