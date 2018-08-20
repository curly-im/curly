import * as Cookies from 'cookies-js';

const loginCookieName = 'curly-auth';

export function getCookie() {
    const raw = Cookies.get(loginCookieName);

    if (!raw) return null;

    return JSON.parse(raw);
}

export async function verify() {
    const cookie = getCookie();
    const verificationFailed = () => ({ verified: false });
    const verificationSucceeded = (userData) => ({ verified: true, userData });

    if (!cookie) return verificationFailed();

    const response = await fetch(
        `https://api.github.com/user?access_token=${cookie.token}`,
        { headers: { Accept: 'application/json' }, mode: 'cors' }
    );

    const json = await response.json();

    if (json.id !== cookie.user) return verificationFailed();

    return verificationSucceeded(json);
}

export function logout() {
    Cookies.expire(loginCookieName, { domain: window.location.host });
    window.location.reload(); //TODO: remove it, change appState instead
}

export default {
    getCookie,
    verify,
    logout
};
