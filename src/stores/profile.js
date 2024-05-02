import { writable } from 'svelte/store';

export const profileStore = writable({
    username: null,
    avatar: null,
    first_name: null,
    last_name: null,
});
