import Cookies from 'js-cookie';
import { apiBaseUrl } from '~~/const/config';
import axios from 'axios';
import { brand_dropdown_list_api, category_dropdown_list_api, closet_item_favorite_api, color_dropdown_list_api, size_dropdown_list_api } from '~~/const/api';

export const getProfile = async () => {
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

export const getWall = async () => {
    const token = Cookies.get('token');

    const response = await axios.get(
      `${apiBaseUrl}/wall`,
      {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      }
    );
    return response;
}


export const getClosets = async (id) => {
  const token = Cookies.get('token');
  const response = await axios.get(
    `${apiBaseUrl}/closets`,
    {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    }
  );
  return response;
}

export const getCloset = async (id) => {
  const token = Cookies.get("token");
  // console.log(id);
  const response = await axios.get(`${apiBaseUrl}/closets/${id}`, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  return response.data;
};

export const deleteCloset = async (id) => {
  const token = Cookies.get("token");
  // console.log(id);
  const response = await axios.delete(`${apiBaseUrl}/closets/${id}`, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  return response;
};

export const updateCloset = async (id, title, description) => {
  const token = Cookies.get("token");
  console.log(id);
  const response = await axios.put(
    `${apiBaseUrl}/closets/${id}`,
    { title, description },
    {
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );
  return response;
};

export const getClosetItem = async (id) => {
  const token = Cookies.get("token");

  const response = await axios.get(
    `${apiBaseUrl}/closet-items-by-closet-id/${id}`,
    {
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );
  return response;
};

export const fetchFilterData = async (id, min, max) => {
  const token = Cookies.get("token");
  const api = min!=''?`${apiBaseUrl}/closet-items-filter-by-price/${id}/${min}/${max}`:`${apiBaseUrl}/closet-items-filter-by-price/${id}`;
  const response = await axios.get(api, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  return response.data;
};

export const fetchBrandDropdown = async () => {
  const token = Cookies.get("token");
  const api = `${apiBaseUrl}/${brand_dropdown_list_api}`;
  const response = await axios.get(api, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  return response.data;
};

export const fetchColorDropdown = async () => {
  const token = Cookies.get("token");
  const api = `${apiBaseUrl}/${color_dropdown_list_api}`;
  const response = await axios.get(api, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  return response.data;
};

export const fetchCategoryDropdown = async () => {
  const token = Cookies.get("token");
  const api = `${apiBaseUrl}/${category_dropdown_list_api}`;
  const response = await axios.get(api, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  return response.data;
};

export const fetchSizeDropdown = async () => {
  const token = Cookies.get("token");
  const api = `${apiBaseUrl}/${size_dropdown_list_api}`;
  const response = await axios.get(api, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  return response.data;
};

export const fetchFilterDataNew = async (id, min, max,ctg,brand,color,size,search) => {
  const token = Cookies.get("token");
  const api = `${apiBaseUrl}/closet-items-by-closet-id/${id}?category=${ctg}&brand=${brand}&size=${size}&color=${color}&price_min=${min}&price_max=${max}&keyword=${search}`;
  const response = await axios.get(api, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  return response.data;
};


export const deleteClosetItem = async (id) => {
  const token = Cookies.get('token');
  const response = await axios.delete(`${apiBaseUrl}/closet-items/${id}`, {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  });
  return response.data;
};

export const closetItemFavorite = async (id) => {
  const token = Cookies.get('token');
  console.log("token: ", token)
  const response = await axios.post(`${apiBaseUrl}/${closet_item_favorite_api}/${id}`,{}, {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  });
  return response.data;
};


