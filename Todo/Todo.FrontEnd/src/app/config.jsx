const serverName = 'http://localhost:5005';
export const apiEndPoint = __PRODUCTION__ ? '/api' : `${serverName}/api`;
export const serverUrl = __PRODUCTION__ ? '/' : `${serverName}/`;