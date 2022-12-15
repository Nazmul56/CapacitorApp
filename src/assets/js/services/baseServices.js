import axios from "axios";

export const getRequest = (endPoint, config = {}) => {
    return new Promise((resolve, reject) => {
        axios
            .get(endPoint, config)
            .then(res => {
                resolve(res.data);
            })
            .catch(err => {
                reject(err.message);
            });
    });
};

export const postRequest = (endPoint, data = {}, config = {}) => {
    return new Promise((resolve, reject) => {
        axios
            .post(endPoint, data, config)
            .then(res => {
                resolve(res.data);
            })
            .catch(err => {
                reject(err.message);
            });
    });
};

export const putRequest = (endPoint, data = {}, config = {}) => {
    return new Promise((resolve, reject) => {
        axios
            .put(endPoint, data, config)
            .then(res => {
                resolve(res.data);
            })
            .catch(err => {
                reject(err.message);
            });
    });
};

export const deleteRequest = (endPoint, config = {}) => {
    return new Promise((resolve, reject) => {
        axios
            .delete(endPoint, config)
            .then(res => {
                console.log(res);
                resolve(res.data);
            })
            .catch(err => {
                reject(err.message);
            });
    });
};

// Utils functions
export const cartItemQnt = cartItems => {
    let cartItemQnt = 0;

    Object.entries(cartItems).forEach(([key, values]) => {
        values.forEach((item, i) => {
            if (i > 0) {
                cartItemQnt += item.qty;
            }
        });
    });

    return cartItemQnt;
};
