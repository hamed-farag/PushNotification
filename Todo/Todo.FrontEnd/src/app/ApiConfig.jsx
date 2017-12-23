import { apiEndPoint } from './config';
import SafeUrlAssembler from 'safe-url-assembler';

const _rootUrl = apiEndPoint;

export const todoAPI = `${_rootUrl}/TodoAPI`;

/*
export const testApi = function (id) {
    return SafeUrlAssembler(_rootUrl)
        .template('/test/:id')
        .param({ id })
        .toString();
}
*/