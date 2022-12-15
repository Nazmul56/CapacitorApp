import axios from "axios";
import { apiBaseUrl } from "~~/const/config";
import Cookies from "js-cookie";
import { select_dropdown_api, brand_list_api } from "~~/const/api";

export const brandFilter = async (filter) => {
  const token = Cookies.get("token");
  const response = await axios.get(
    `${apiBaseUrl}/${select_dropdown_api}/${brand_list_api}`,
    filter,
    {
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );
  return response.data;
};

// export const userContactNewsletter = async (newsletterInfo) => {
//   const token = Cookies.get("token");
//   const response = await axios.post(
//     `${apiBaseUrl}/${newsletter_subscribe_api}`,
//     newsletterInfo,
//     {
//       headers: {
//         Authorization: "Bearer " + token,
//       },
//     }
//   );
//   return response.data;
// };


