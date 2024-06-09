import { writable } from 'svelte/store';

export const windowStateType = {
    MY_PROJECTS: "`MY_PROJECTS`",
    CURRENT_PROJECT: "CURRENT_PROJECT",
    REGISTER_SCREEN:"REGISTER_SCREEN",
    LOGIN_SCREEN:"LOGIN_SCREEN",
    INVITATION_SCREEN: "INVITATION_SCREEN",
    TEST_SCREEN: "TEST_SCREEN",
  };
  

export const windowState = writable({
    type: windowStateType.INVITATION_SCREEN,
});