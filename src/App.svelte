<script>
  import Register from './lib/Register.svelte';
  import Header from './lib/Header.svelte';
  import Main from './lib/Main.svelte';
  import TailwindCss from './lib/TailwindCSS.svelte';
  import PhotoCreate from './lib/PhotoCreate.svelte';
  import PhotoList from './lib/PhotoList.svelte';
  import PhotoOne from './lib/PhotoOne.svelte';
  import ProfilesList from './lib/ProfilesList.svelte';
  import MyProjects from './lib/MyProjects.svelte';
  import TestAuth from './lib/TestAuth.svelte';
  import InvitationScreen from './lib/InvitationScreen.svelte';
  import Login from './lib/Login.svelte';

  import './services/api.js';
  
  import {windowState, windowStateType} from './stores/window.js';
  import {authStore} from './stores/auth.js';
  import { writable, get } from 'svelte/store';
    import { login } from './services/api.js';

</script>


<Header/> 

{#if $authStore.refreshToken === null}
  
  {#if $windowState.type === windowStateType.REGISTER_SCREEN}
    <Register/>
  {:else if $windowState.type === windowStateType.LOGIN_SCREEN}
    <Login/>
  {:else}
    <InvitationScreen/>
  {/if}
{:else}
  {#if $windowState.type === windowStateType.MY_PROJECTS}
  <MyProjects/>
  {:else if $windowState.type === windowStateType.TEST_SCREEN}
    <PhotoList />
    <PhotoOne />
    <PhotoCreate />
    <Main />
  {:else}
    <MyProjects/>
  {/if}
{/if}

<TailwindCss/> 