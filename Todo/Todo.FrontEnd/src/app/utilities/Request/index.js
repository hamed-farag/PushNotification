import axios from 'axios';

export default (url, actionType = 'get', data = {}) => {
    return axios({
        method: actionType,
        url: url,
        responseType: 'json',
        headers: {
            'Content-Type': 'application/json',
        },
        data: JSON.stringify(data)
    });
}