import { get } from 'svelte/store';
import { authStore } from '../stores/auth';
import { profileStore } from '../stores/profile';

const BASE_URL = 'http://localhost:8000'; 

export async function register(username, password, first_name, last_name, avatar) {
    const formData = new FormData();
  
      formData.append('username', username);
      formData.append('password', password);
      formData.append('first_name', first_name);
      formData.append('last_name', last_name);

      if (avatar !== null){
        formData.append('avatar', avatar); 
      }
    const response = await fetch(`${BASE_URL}/register/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: formData,
    });

    if (response.ok) {
        const data = await response.json();
        return data;
    } else {
        const error = await response.json();
        throw new Error(`Registration failed: ${JSON.stringify(error)}`);
    }
}

export async function login(username, password) {
    const response = await fetch(`${BASE_URL}/login/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
        const tokens = await response.json();
        authStore.set({
            accessToken: tokens.access,
            refreshToken: tokens.refresh,
        });
        return tokens;
    } else {
        const error = await response.json();
        throw new Error(`Registration failed: ${JSON.stringify(error)}`);
   
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