import axios from 'axios';
import { apiBaseUrl } from '~~/const/config';
import Cookies from 'js-cookie';
import { contreact_api } from '~~/const/api';

export const fetchContract = async (page = 1) => {
  const token = Cookies.get('token');
  const response = await axios.get(`${apiBaseUrl}/${contreact_api}?page=${page}`, {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  });
  return response.data;
};

export const updateContractStatus = async (contractId = null, status) => {
  const token = Cookies.get('token');
  const response = await axios.post(`${apiBaseUrl}/${contreact_api}/change-status`, {
    id: contractId,
    status: status
  }, {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  });
  return response.data;
};

export const updateOpenClam = async (contractId = null, description) => {
  const token = Cookies.get('token');
  const response = await axios.post(`${apiBaseUrl}/${contreact_api}/open-claim`, {
    contract_id: contractId,
    description: description
  }, {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  });
  return response.data;
};

// export const deleteWorkInvitation = async (invitationId = null) => {
//   const token = Cookies.get('token');
//   const response = await axios.delete(`${apiBaseUrl}/${contreact_api}/${invitationId}`, {
//     headers: {
//       Authorization: 'Bearer ' + token,
//     },
//   });
//   return response.data;
// };

