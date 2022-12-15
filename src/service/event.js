import axios from 'axios';
import { apiBaseUrl } from '~~/const/config';
import Cookies from 'js-cookie';
import { event_add_item_api, event_create_api, event_details_api, event_invitation_acceptDecline, event_invitation_api, event_status_change_api, event_update_api, favourite_event_api, live_events_api, my_events_api, my_events_delete_api, send_invite_user_api } from '~~/const/api';

export const fetchEventInvitation = async (page = 1) => {
    const token = Cookies.get('token');
    const response = await axios.get(`${apiBaseUrl}/${event_invitation_api}?page=${page}`, {
        headers: {
            Authorization: 'Bearer ' + token,
        },
    });
    return response;
};

export const eventInvitationAcceptDecline = async (data) => {
    const token = Cookies.get('token');
    const response = await axios.post(`${apiBaseUrl}/${event_invitation_acceptDecline}`, data, {
        headers: {
            Authorization: 'Bearer ' + token,
        },
    });
    return response;
};

export const fetchMyEvents = async (page = 1, keyword = '', status = '', type = '') => {
    const token = Cookies.get('token');
    const response = await axios.get(`${apiBaseUrl}/${my_events_api}?page=${page}&keyword=${keyword}&status=${status}&type=${type}`, {
        headers: {
            Authorization: 'Bearer ' + token,
        },
    });
    return response;
};

export const fetchLiveEvents = async (page = 1, search = '') => {
    const token = Cookies.get('token');
    const response = await axios.get(`${apiBaseUrl}/${live_events_api}?page=${page}&search_query=${search}`, {
        headers: {
            Authorization: 'Bearer ' + token,
        },
    });
    return response.data;
};

export const updateFavouriteEventStatus = async (id = null, status) => {
    const token = Cookies.get('token');
    const response = await axios.post(`${apiBaseUrl}/${favourite_event_api}`, {
        id: id,
        type: status
    }, {
        headers: {
            Authorization: 'Bearer ' + token,
        },
    });
    return response.data;
};

export const fetchEventByLiveEventId = async (page = 1, id = null, search = '', sort_by_price_range = '', sort_by_brand = '', sort_by_category = '') => {
    console.log("sort_by_category:::", sort_by_category);
    const token = Cookies.get('token');
    const response = await axios.get(
        `${apiBaseUrl}/${event_details_api}/${id}?page=${page}&keyword=${search}&sort_by_price_range=${sort_by_price_range}&sort_by_brand=${sort_by_brand}&sort_by_category=${sort_by_category}`,    //&keyword=Side bags&sort_by_price_range=1-20&sort_by_brand=3168&sort_by_category=31
        {
            headers: {
                Authorization: 'Bearer ' + token,
            },
        });
    return response.data;
};

// My Events
// export const fetchMYEventList = async () => {
//     const token = Cookies.get('token');
//     const response = await axios.get(`${apiBaseUrl}/${event_invitation_api}`, {
//         headers: {
//             Authorization: 'Bearer ' + token,
//         },
//     });
//     return response.data;
// };

export const deleteMyEvent = async (id) => {
    const token = Cookies.get('token');
    const response = await axios.delete(`${apiBaseUrl}/${my_events_delete_api}/${id}`, {
        headers: {
            Authorization: 'Bearer ' + token,
        },
    });
    return response.data;
};

export const createMyEvent = async (data) => {
    const token = Cookies.get('token');
    const response = await axios.post(`${apiBaseUrl}/${event_create_api}`, data, {
        headers: {
            Authorization: 'Bearer ' + token,
        },
    });
    return response.data;
};

export const updateMyEvent = async (data) => {
    const token = Cookies.get('token');
    const response = await axios.post(`${apiBaseUrl}/${event_update_api}`, data, {
        headers: {
            Authorization: 'Bearer ' + token,
        },
    });
    return response.data;
};

export const inviteCollaborator = async (data) => {
    const token = Cookies.get('token');
    const response = await axios.post(`${apiBaseUrl}/${send_invite_user_api}`, data, {
        headers: {
            Authorization: 'Bearer ' + token,
        },
    });
    return response.data;
};

export const eventAddItem = async (data) => {
    const token = Cookies.get('token');
    const response = await axios.post(`${apiBaseUrl}/${event_add_item_api}`, data, {
        headers: {
            Authorization: 'Bearer ' + token,
        },
    });
    return response.data;
};
export const eventStatusChange = async (data) => {
    const token = Cookies.get('token');
    const response = await axios.post(`${apiBaseUrl}/${event_status_change_api}`, data, {
        headers: {
            Authorization: 'Bearer ' + token,
        },
    });
    return response.data;
};
