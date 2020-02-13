import { axiosInstance } from '../initialization';

import Config from '#/config';

import AuthService from './auth';

async function request(method, uri, data = {}, headers = {}, extras = {}) {
  if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
  try {
    const response = await axiosInstance({
      method,
      url: `${Config.url}${uri}`,
      data,
      headers,
      ...extras,
    });
    if (response && response.data) {
      if (response.data.success) return response.data.data;
      return response.data;
    }
    return response;
  } catch (err) {
    throw err;
  }
}

function publicHeader(header = {}) {
  header.Authorization = `Basic ${''}`;
  header['content-type'] = 'application/x-www-form-urlencoded';
  return header;
}

function urlencodedTrans(data) {
  const str = [];
  const keys = Object.keys(data);
  keys.forEach((key) => { str.push(`${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`); });
  return str.join('&');
}

async function getRest(uri, header) {
  return request('get', uri, {}, header);
}

async function postRest(uri, data, header) {
  return request('post', uri, urlencodedTrans(data), publicHeader(header));
}

async function putRest(uri, data, header) {
  return request('put', uri, urlencodedTrans(data), publicHeader(header));
}

function authenticatedHeader(header = {}) {
  const auth = AuthService.get();
  if (auth) header.Authorization = `Bearer ${auth.access_token}`;
  return header;
}

async function getAuthenticated(uri, header, extras) {
  return request('get', uri, {}, authenticatedHeader(header), extras);
}

async function postAuthenticated(uri, data, header) {
  return request('post', uri, data, authenticatedHeader(header));
}

async function putAuthenticated(uri, data, header) {
  return request('put', uri, data, authenticatedHeader(header));
}

export default {
  getRest,
  postRest,
  putRest,
  getAuthenticated,
  postAuthenticated,
  putAuthenticated,
  authenticatedHeader,
};
