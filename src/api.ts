const baseUrl = 'http://163.172.177.98:8081/docs/';

const baseHeaders = {
    "Content-Type": 'application/json',
    "Accept": 'application/json'
}

export const register = async (email: string, password: string): Promise<string> => {
    const response = await fetch(`${baseUrl}/auth/register`, {
        method: 'POST',
        headers: baseHeaders,
        body: JSON.stringify({
            email,
            password
        })
    });

    const responseJson = await response.json();

    console.log(responseJson);

    return responseJson;
}

export const login = async (email: string, password: string): Promise<string> => {
    console.log("Login API call");

    const response = await fetch(`${baseUrl}/auth/login`, {
        method: 'POST',
        headers: baseHeaders,
        body: JSON.stringify({
            email,
            password
        })
    });

    const responseJson = await response.json();

    console.log(responseJson);

    return responseJson;
}
