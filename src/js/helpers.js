// import { async } from 'regenerator-runtime';
import { async } from 'regenerator-runtime';
import { TIMEOUT_SEC } from './config.js';

//helper.js is for functions that will be reused

// Setting a timeout after which request fail
const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

export const AJAX = async function (
  url,
  uploadData = undefined,
  method = 'GET'
) {
  try {
    const fetchPro = uploadData
      ? fetch(url, {
          method: method,
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(uploadData),
        })
      : fetch(url, {
          method: method,
        });

    const res = await Promise.race([fetchPro, timeout(TIMEOUT_SEC)]);

    if (method === 'DELETE') {
      if (!res.ok) throw new Error('Error deleting resource (${res.status})');
      return;
    }
    const data = await res.json();

    if (!res.ok) throw new Error(`${data.message} (${res.status})`);
    return data;
  } catch (err) {
    throw err; // promise that is being returned from getJSON will be reject with this error handling, and we will be able to handle the error in model.js, where we want it. We propagated error from one async funciton to another by re-throwing it here in this catch block
  }
};

// headers are snippets of text that have informations about request itself
// application/json - we specify in the request that the data we're gonna send will be in json format, so api can correctly accept taht data and create new recipe in data base
