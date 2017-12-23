import axios from 'axios';

export default (url, actionType = 'get', data = {}) => {
    return axios({
        method: actionType,
        url: url,
        responseType: 'json',
        data: data
    });
}