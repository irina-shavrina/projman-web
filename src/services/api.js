import { get } from 'svelte/store';
import { authStore , setTokens} from '../stores/auth';
import { profileStore, setProfile } from '../stores/profile';

const BASE_URL = 'http://localhost:8000'; 

export async function login(username, password) {
    let request = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    };
    const response = await fetch(`${BASE_URL}/login/`, request);

    if (response.ok) {
        const data = await response.json();
        setTokens(data.access,data.refresh);
        setProfile(data.username, data.avatar, data.first_name, data.last_name);
        return data;
    } else {
        const error = await response.json();
        throw new Error(`Registration failed: ${JSON.stringify(error)}`);
   
    }
}

export async function register(username, password, first_name, last_name, avatar) {
    const formData = new FormData();

    formData.append('username', username);
    formData.append('password', password);
    formData.append('first_name', first_name);
    formData.append('last_name', last_name);

    if (avatar !== null) {
        formData.append('avatar', avatar);
    }

    try {
        const response = await fetch(`${BASE_URL}/register/`, {
            method: 'POST',
            body: formData,
        });

        if (!response.ok) {
            const error = await response.text();
            throw new Error(`Registration failed: ${error}`);
        }

        const data = await response.json();
        console.log(data);
        setTokens(data.access,data.refresh);
        setProfile(data.username, data.avatar, data.first_name, data.last_name)
        return data;
    } catch (error) {
        throw new Error(`Registration failed: ${error.message}`);
    }
}



export async function getProfiles() {
    const response = await fetch(`${BASE_URL}/profile/`);
    if (response.ok) {
        const data = await response.json();
        return data;
    } else {
        const error = await response.json();
        throw new Error(`Registration failed: ${JSON.stringify(error)}`);
   
    }
}

export async function getResource() {
    const accessToken = get(authStore).accessToken;

    const response = await fetch(`${BASE_URL}/`, {
        headers: {
            'Authorization': `Bearer ${accessToken}`,
        },
    });

    if (response.ok) {
        const data = await response.json();
        return data;
    } else {
        const error = await response.json();
        throw new Error(`Registration failed: ${JSON.stringify(error)}`);
   
    }
}