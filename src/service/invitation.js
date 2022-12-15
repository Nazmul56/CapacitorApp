import axios from 'axios';
import { apiBaseUrl } from '~~/const/config';
import Cookies from 'js-cookie';
import { work_invitation_api } from '~~/const/api';

export const fetchInvitations = async (page = 1) => {
  const token = Cookies.get('token');
  const response = await axios.get(`${apiBaseUrl}/${work_invitation_api}?page=${page}`, {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  });
  return response.data;
};

export const updateAcceptDecline = async (invitationId = null, action) => {
  const token = Cookies.get('token');
  const response = await axios.post(`${apiBaseUrl}/${work_invitation_api}/accept-decline`,{
    // body: {
      id: invitationId,
      action: action
    // }
  }, {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  });
  return response.data;
};

export const deleteWorkInvitation = async (invitationId = null) => {
  const token = Cookies.get('token');
  const response = await axios.delete(`${apiBaseUrl}/${work_invitation_api}/${invitationId}`, {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  });
  return response.data;
};

