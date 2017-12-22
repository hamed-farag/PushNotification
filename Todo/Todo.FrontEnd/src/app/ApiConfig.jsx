import globalConfig from './config';
import SafeUrlAssembler from 'safe-url-assembler';

const _rootUrl = globalConfig.apiEndPoint;

export const todoAPI = `${_rootUrl}/todo`;

/*
export const testApi = function (id) {
    return SafeUrlAssembler(_rootUrl)
        .template('/test/:id')
        .param({ id })
        .toString();
}
*/