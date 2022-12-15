import axios from 'axios';
import Cookies from 'js-cookie';
import { chat_get_message_api, chat_send_message_api, chat_user_list_api } from '~~/const/api';
import { apiBaseUrl } from '~~/const/config';

export const chatUserList = async (keyword) => {
    const token = Cookies.get('token');
    const api = keyword != '' ? `${apiBaseUrl}/${chat_user_list_api}?keyword=${keyword}` : `${apiBaseUrl}/${chat_user_list_api}`

    const response = await axios.get(api, {
        headers: {
            Authorization: 'Bearer ' + token,
        },
    });
    return response.data;
};

export const chatMsgByUser = async (id) => {
    const token = Cookies.get('token');
    const api = `${apiBaseUrl}/${chat_get_message_api}/${id}`

    const response = await axios.get(api, {
        headers: {
            Authorization: 'Bearer ' + token,
        },
    });
    return response.data;
};

export const sendChatMsg = async (data) => {
    const token = Cookies.get('token');
    const api = `${apiBaseUrl}/${chat_send_message_api}`

    const response = await axios.post(api, data, {
        headers: {
            Authorization: 'Bearer ' + token,
        },
    });
    return response.data;
};
