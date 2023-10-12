// import { async } from 'regenerator-runtime';
import { TIMEOUT_SEC } from './config.js';

// Setting a timeout after which request fail
const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// for functions that will be reused
export const getJSON = async function (url) {
  try {
    const fetchPro = fetch(url);
    // const res = await Promise.race([fetch(url), timeout(TIMEOUT_SEC)]);
    const res = await Promise.race([fetchPro, timeout(TIMEOUT_SEC)]);
    const data = await res.json();

    if (!res.ok) throw new Error(`${data.message} (${res.status})`);
    return data;
  } catch (err) {
    throw err; // promise that is being returned from getJSON will be reject with this error handling, and we will be able to handle the error in model.js, where we want it. We propagated error from one async funciton to another by re-throwing it here in this catch block
  }
};

export const sendJSON = async function (url, uploadData) {
  try {
    const fetchPro = fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(uploadData),
    });
    const res = await Promise.race([fetchPro, timeout(TIMEOUT_SEC)]);
    // const res = await Promise.race([fetch(url), timeout(TIMEOUT_SEC)]);
    const data = await res.json();

    if (!res.ok) throw new Error(`${data.message} (${res.status})`);
    return data;
  } catch (err) {
    throw err;
  }
};

// headers are snippets of text that have informations about request itself
// application/json - we specify in the request that the data we're gonna send will be in json format, so api can correctly accept taht data and create new recipe in data base
