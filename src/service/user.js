import axios from 'axios';
import Cookies from 'js-cookie';
import { get_all_notifications_api, search_users_api, user_details_api, user_follow_UnFollow_api, user_invitations_list_api, user_list, user_send_offer_api } from '~~/const/api';
import { apiBaseUrl } from '~~/const/config';

export const userList = async (searchText, page = 1) => {
	const token = Cookies.get("token");
	const api =
		searchText?.trim() != ""
			? `${apiBaseUrl}/${user_list}?page=${page}&keyword=${searchText}`
			: `${apiBaseUrl}/${user_list}?page=${page}`;

	const response = await axios.get(api, {
		headers: {
			Authorization: "Bearer " + token,
		},
	});
	return response.data;
};

export const userListById = async (id,searchText='', page = 1) => {
    const token = Cookies.get('token');
    const api = `${apiBaseUrl}/${user_invitations_list_api}/${id}?page=${page}&keyword=${searchText}`

	const response = await axios.get(api, {
		headers: {
			Authorization: "Bearer " + token,
		},
	});
	return response.data;
};

export const userDetailsById = async (id) => {
    const token = Cookies.get('token');
    const api = `${apiBaseUrl}/${user_details_api}/${id}`

    const response = await axios.get(api, {
        headers: {
            Authorization: 'Bearer ' + token,
        },
    });
    return response.data;
};

export const searchUserList = async () => {
	const token = Cookies.get("token");
	const api = `${apiBaseUrl}/${search_users_api}`;

	const response = await axios.get(api, {
		headers: {
			Authorization: "Bearer " + token,
		},
	});
	return response.data;
};

export const userFollowUnFollow = async (id) => {
    const token = Cookies.get('token');
    const api = `${apiBaseUrl}/${user_follow_UnFollow_api}/${id}`

    const response = await axios.post(api,{}, {
        headers: {
            Authorization: 'Bearer ' + token,
        },
    });
    return response.data;
};

export const userSendOffer = async (data) => {
    const token = Cookies.get('token');
    const api = `${apiBaseUrl}/${user_send_offer_api}`

    const response = await axios.post(api, data, {
        headers: {
            Authorization: 'Bearer ' + token,
        },
    });
    return response.data;
};

export const notificationList = async () => {
	const token = Cookies.get("token");
	const api = `${apiBaseUrl}/${get_all_notifications_api}`;

	const response = await axios.get(api, {
		headers: {
			Authorization: "Bearer " + token,
		},
	});

	return response.data;
};

export const dismissNotificationList = async (id) => {
	const token = Cookies.get("token");
	const api = `${apiBaseUrl}/${dismiss_notifications_api}/${id}`;

	const response = await axios.delete(api, {
		headers: {
			Authorization: "Bearer " + token,
		},
	});

	return response.data;
};

export const clearNotificationList = async () => {
	const token = Cookies.get("token");
	const api = `${apiBaseUrl}/${clear_notifications_api}`;

	const response = await axios.post(
		api,
		{},
		{
			headers: {
				Authorization: "Bearer " + token,
			},
		}
	);

	return response.data;
};
