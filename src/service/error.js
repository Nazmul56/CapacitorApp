export const errorHanadler = (error) => {
  let message = '';
  try {
    const status = error ? error.response.status : null;
    if (status == 401) {
      message = 'Invalid Credentials.';
    } else if (status == 403) {
      message = 'You do not have right permission.';
    } else if (status == 404) {
      message = 'We did not find the data.';
    } else if (status == 500) {
      message = 'Server is in maintenance mode, please try again later!';
    } else {
      if (error) {
        message = error.response.data.message;
      } else {
        message = 'Something went wrong, please try again later!';
      }
    }
  } catch (err) {
    message = 'Something went wrong, please try again later!';
  }

  return message;
};
