import fetch from 'cross-fetch';

const _getErrorMessage = err =>
  err.msg ||
  err.message ||
  err.error_description ||
  err.error ||
  JSON.stringify(err);

const handleError = (error, reject) => {
  if (typeof error.json !== 'function') {
    return reject(error);
  }
  error.json().then(err => {
    return reject({
      message: _getErrorMessage(err),
      status: error?.status || 500,
    });
  });
};

const _getRequestParams = (method, options, body) => {
  const params = { method, headers: options?.headers || {} };

  if (method === 'GET') {
    return params;
  }

  params.headers = { 'Content-Type': 'application/json', ...options?.headers };
  params.body = JSON.stringify(body);

  return params;
};

async function _handleRequest(method, url, options, body) {
  return new Promise((resolve, reject) => {
    fetch(url, _getRequestParams(method, options, body))
      .then(result => {
        console.log(result);
        if (!result.ok) throw result;
        if (options?.noResolveJson) return resolve;
        return result.json();
      })
      .then(data => resolve(data))
      .catch(error => handleError(error, reject));
  });
}

export async function get(url, options) {
  return _handleRequest('GET', url, options);
}

export async function post(url, body, options) {
  return _handleRequest('POST', url, options, body);
}

export async function put(url, body, options) {
  return _handleRequest('PUT', url, options, body);
}

export async function remove(url, body, options) {
  return _handleRequest('DELETE', url, options, body);
}
