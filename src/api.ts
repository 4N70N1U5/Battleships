const baseUrl = 'https://malamute-enabled-yak.ngrok-free.app';

const baseHeaders = {
    "Content-Type": 'application/json',
    "Accept": 'application/json'
}

export const login = async (email: string, password: string): Promise<string> => {
    console.log("Login API call: " + baseUrl + "/auth/login");

    const response = await fetch(`${baseUrl}/auth/login`, {
        method: 'POST',
        headers: {
            ...baseHeaders
        },
        body: JSON.stringify({
            email,
            password
        })
    });

    const responseJson = await response.json();

    // console.log("Login API call response: " + responseJson);

    return responseJson.accessToken;
}

export const register = async (email: string, password: string) => {
    console.log("Register API call: " + baseUrl + "/auth/register");

    const response = await fetch(`${baseUrl}/auth/register`, {
        method: 'POST',
        headers: {
            ...baseHeaders
        },
        body: JSON.stringify({
            email,
            password
        })
    });

    const responseJson = await response.json();

    // console.log("Register API call response: " + responseJson);
}

export const getUserDetails = async (token: string) => {
    console.log("Get user details API call: " + baseUrl + "/user/details/me");
    console.log("Get user details token: " + token);

    const response = await fetch(`${baseUrl}/user/details/me`, {
        method: "GET",
        headers: {
            ...baseHeaders,
            'Authorization': `Bearer ${token}`
        }
    });

    const responseJson = await response.json();

    // console.log("Get user details API call response: " + responseJson);

    return responseJson;
}

export const getAllGames = async (token: string) => {
    console.log("Get all games API call: " + baseUrl + "/game");
    console.log("Get all games token: " + token);

    const response = await fetch(`${baseUrl}/game`, {
        method: "GET",
        headers: {
            ...baseHeaders,
            'Authorization': `Bearer ${token}`
        }
    });

    const responseJson = await response.json();

    return responseJson;
}

export const createGame = async (token: string) => {
    console.log("Create game API call: " + baseUrl + "/game");
    console.log("Create game token: " + token);

    const response = await fetch(`${baseUrl}/game`, {
        method: "POST",
        headers: {
            ...baseHeaders,
            'Authorization': `Bearer ${token}`
        }
    });

    const responseJson = await response.json();

    return responseJson;
}
