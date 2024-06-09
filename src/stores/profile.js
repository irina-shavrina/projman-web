import { writable } from 'svelte/store';

export const profileStore = writable({
    username: null,
    avatar: null,
    first_name: null,
    last_name: null,
});

export function setProfile(username, avatar, first_name, last_name) {
    profileStore.set({
        username: username,
        avatar: avatar,
        first_name: first_name,
        last_name: last_name,
    });
}

export function clearTokens(username, avatar, first_name, last_name) {
    profileStore.set({
        username: null,
        avatar: null,
        first_name: null,
        last_name: null,
    });
}