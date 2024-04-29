// const baseUrl = 'http://163.172.177.98:8081';
const baseUrl = 'http://192.168.100.154:8080';

const baseHeaders = {
    "Content-Type": 'application/json',
    "Accept": 'application/json'
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

    console.log("Register API call response: " + responseJson);

    return responseJson.accessToken;
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

    console.log("Login API call response: " + responseJson);

    return responseJson.accessToken;
}
