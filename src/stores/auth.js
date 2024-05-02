import { writable } from 'svelte/store';

export const authStore = writable({
    accessToken: null,
    refreshToken: null,
});

export function setTokens(access, refresh) {
    authStore.set({
        accessToken: access,
        refreshToken: refresh,
    });
}

export function clearTokens() {
    authStore.set({
        accessToken: null,
        refreshToken: null,
    });
}
