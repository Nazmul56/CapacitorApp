import { questionnairesHandle } from './authentication';
import Cookies from 'js-cookie';
import { apiBaseUrl } from '~~/const/config';
import axios from 'axios';

const objectToFormData = (obj) => {
    let formData = new FormData();
    Object.keys(obj).forEach((key) => {
    if (typeof obj[key] === "object") {
        const items = obj[key];
        for (let i = 0; i < items.length; i++) {

          formData.append(`${key}[${i}]`, items[i]);
        }
    } else {
        formData.append(key, obj[key]);
    }
    });
    return formData;
}

export const getUserData = async () => {
  const token = Cookies.get('token');
  const response = await axios.get(
    `${apiBaseUrl}/profile`,
    {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    }
  );

  return response;
}

export const submitAddress = async (form, nextStep) => {
  const formData = objectToFormData(form);
  const token = Cookies.get('token');
  const response = await axios.post(
    `${apiBaseUrl}/addresses`,
    formData,
    {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    }
  );

  // if(response.status === 200) {
  //   window.location.href = nextStep;
  // }

  return response;
} 

export const updateAddress = async (id, form, nextStep) => {
  const token = Cookies.get('token');
  const response = await axios.put(
    `${apiBaseUrl}/addresses/${id}`,
    form,
    {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    }
  );

  if(response.status === 200) {
    window.location.href = nextStep;
  }

  return response;
} 

export const getAddresses = async () => {
  const token = Cookies.get('token');
  const response = await axios.get(
    `${apiBaseUrl}/addresses`,
    {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    }
  );

  return response;
} 

export const deleteAddress = async (id) => {
  const token = Cookies.get('token');
  const response = await axios.delete(
    `${apiBaseUrl}/addresses/${id}`,
    {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    }
  );
  // if(response.status === 200) {
  //   window.location.reload();
  // }
  return response;
} 

export const getAddress = async (id) => {
  const token = Cookies.get('token');
  const response = await axios.get(
    `${apiBaseUrl}/addresses/${id}`,
    {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    }
  );

  return response;
} 

export const submitForm = async (form, nextStep) => {
    const formData = objectToFormData(form);
    const res = await questionnairesHandle(formData);
    return res?.status;
    
    if(res.status === 200) {
        //window.location.href = nextStep;
        alert('sss');
        this.router.push('/')
    }
}

export const submitStore = async (form, nextStep) => {
  const formData = objectToFormData(form);
  const res = await axios.get(
    `${apiBaseUrl}/style`,
    {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    }
  );

  if(res.status === 200) {
      window.location.href = nextStep;
  } else {
      // this.toast.error(`${res.status} - ${res.data.message}`);
  }
}

export const fetchColors = async () => {
    const token = Cookies.get('token');
    const response = await axios.get(
      `${apiBaseUrl}/colors`,
      {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      }
    );
    return response;
}

export const fetchStyles = async () => {
    const token = Cookies.get('token');
    const response = await axios.get(
      `${apiBaseUrl}/style`,
      {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      }
    );
    return response;
}

export const fetchBrands = async () => {
    const token = Cookies.get('token');
    const response = await axios.get(
      `${apiBaseUrl}/brands`,
      {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      }
    );
    return response;
}