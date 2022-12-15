const stage = 'production';
const config_prod = {
  baseUrl: "https://api.casabeaumonde.com",
  siteURL: "casabeaumonde.com",
  mediaUrl: "https://api.casabeaumonde.com/storage",
  version: "v2",
  stripePublicKey:
    "pk_test_51KpmccAQa7ZvE9shoHvltIypnKxvWJ27avneCGST6Lcxru5Vr1RZE0415NjdNd0oIuN7oGCSDw3wKt45wKI16Zqv003ha9LKE9",
};
const config_dev = {
  baseUrl: "https://prolific.casabeaumonde.com",
  siteURL: "prolific.casabeaumonde.com",
  mediaUrl: "https://prolific.casabeaumonde.com/storage",
  version: "v2",
  stripePublicKey:
    "pk_test_51KpmccAQa7ZvE9shoHvltIypnKxvWJ27avneCGST6Lcxru5Vr1RZE0415NjdNd0oIuN7oGCSDw3wKt45wKI16Zqv003ha9LKE9",
};
const config_local = {
  baseUrl: "https://prolific.casabeaumonde.com",
  siteURL: "localhost:3000",
  mediaUrl: "https://prolific.casabeaumonde.com/storage",
  version: "v2",
  stripePublicKey:
    "pk_test_51KpmccAQa7ZvE9shoHvltIypnKxvWJ27avneCGST6Lcxru5Vr1RZE0415NjdNd0oIuN7oGCSDw3wKt45wKI16Zqv003ha9LKE9",
};
// const config_local = {
//   baseUrl: 'https://prolific.casabeaumonde.com',
//   // baseUrl: 'http://192.168.98.70:8000',
//   siteURL: 'localhost:3000',
//   mediaUrl: 'https://prolific.casabeaumonde.com/storage',
//   version: 'v2',
//   stripePublicKey:
//     "pk_test_51KpmccAQa7ZvE9shoHvltIypnKxvWJ27avneCGST6Lcxru5Vr1RZE0415NjdNd0oIuN7oGCSDw3wKt45wKI16Zqv003ha9LKE9",
// };
const config =
  stage == "production"
    ? config_prod
    : stage == "development"
    ? config_dev
    : config_local;
export const baseUrl = config.baseUrl;
export const apiBaseUrl = `${config.baseUrl}/api/${config.version}`;
export const mediaUrl = `${config.mediaUrl}`;
export const stripePublicKey = `${config.stripePublicKey}`;
export const siteUrl = config.siteURL;
