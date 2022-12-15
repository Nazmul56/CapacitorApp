import axios from "axios";
import { apiBaseUrl } from "~~/const/config";
import Cookies from "js-cookie";
import { contact_api, newsletter_subscribe_api } from "~~/const/api";

export const userContact = async (contactInfo) => { 
    const token = Cookies.get('token');
    const response = await axios.post(`${apiBaseUrl}/${contact_api}`, contactInfo, {
        headers: {
            Authorization: 'Bearer ' + token,
        },
    });
    return response.data;
}

export const userContactNewsletter = async (newsletterInfo) => { 
    const token = Cookies.get('token');
    const response = await axios.post(`${apiBaseUrl}/${newsletter_subscribe_api}`, newsletterInfo, {
        headers: {
            Authorization: 'Bearer ' + token,
        },
    });
    return response.data;
}
