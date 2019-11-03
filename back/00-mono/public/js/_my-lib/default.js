if (!log) var log = console.log;

const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
};

const request = async (url, method, data) => {
    const rawResponse = await fetch(url, {
        method: method,
        headers,
        body: JSON.stringify(data)
    });
    return await rawResponse.json();
}

log('document.cookie', document.cookie);

function getCookie() {
    let cookie = document.cookie.split(' ')
    let result = {}, key, value;
    cookie.map((one, i) => {
        key = one.split('=')[0];
        value = one.split('=')[1];
        result[key] = value;
    })
    return result
}

log('cookie', getCookie());

// !!!
const selector = elem => document.querySelector(elem);

