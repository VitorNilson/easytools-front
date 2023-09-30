
const BASE_URL = process.env.REACT_APP_BASE_URL_API;

export const get = (url: string, successHook: Function, errorHook: Function) => {
    doHttpOperation('GET', url, null, successHook, errorHook);
}

export const post = (url: string, body: any, successHook: Function, errorHook: Function) => {
    doHttpOperation('POST', url, null, successHook, errorHook, body);
}

export const put = (url: string, body: any, successHook: Function, errorHook: Function) => {
    doHttpOperation('PUT', url, null, successHook, errorHook, body);
}


async function doHttpOperation(method: string, url: string, headers: any, successHook: Function, errorHook: Function, body?: any,) {

    let response: Promise<Response> = fetch(BASE_URL + url, {
        method: method,
        headers: headers ?? {"Accept": "application/json", "Content-Type": "application/json"},
        body: JSON.stringify(body)
    });

    if ((await response).status < 300)
        successHook(response);
    else
        errorHook(response);

}
