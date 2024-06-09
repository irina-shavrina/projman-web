<script>

  
  import {windowState, windowStateType} from '../stores/window.js';
  import {authStore, clearTokens} from '../stores/auth.js';
  import {profileStore} from '../stores/profile.js';
  import { writable, get } from 'svelte/store';
  import  '../services/api.js';
    import Profile from './Profile.svelte';
</script>
<header class="flex justify-between items-center p-4 bg-white text-gray-800 shadow w-full fixed top-0 ">
    <div class="flex items-center space-x-2">
      <img src="/logo.png" alt="Logo" class="w-12 h-12" />
      <span class="font-bold text-xl">MicroJIra</span>
    </div>
  

    <div class="flex items-center space-x-4">

      <a href="#" class="text-gray-600 hover:text-gray-900">Home</a>
      <a href="#" class="text-gray-600 hover:text-gray-900">About</a>
      <a href="#" class="text-gray-600 hover:text-gray-900">Contact</a>
  

      <div class="flex space-x-2">
        {#if $authStore.refreshToken === null}
        <button
          class="px-4 py-2 border border-gray-300 text-gray-600 hover:bg-gray-100 rounded"
          on:click={()=>{windowState.update(u => ({ ...u, type: windowStateType.LOGIN_SCREEN}))
          
        }}
        >
          Login
        </button>
  
        <button 
          class="px-4 py-2 bg-gray-800 text-white hover:bg-gray-900 rounded"
          on:click={()=>{windowState.update(u => ({ ...u, type: windowStateType.REGISTER_SCREEN}))}}
        >
          Register
        </button>
        {:else }
        <div class="flex items-center space-x-2">
          
            <img src="{$profileStore.avatar !== null ? $profileStore.avatar : '/default-avatar.png'}" alt="Avatar" class="w-10 h-10 rounded-full mb-1" />
            <div class="flex flex-col items-center">
            <span class="text-xs text-gray-600">{"@"+$profileStore.username}</span>
            <span class="text-xs text-gray-400">{$profileStore.first_name} {$profileStore.last_name}</span>
          </div>
          <button
            class="px-4 py-2 bg-red-600 text-white hover:bg-red-700 rounded"
            on:click={clearTokens}
          >
            Logout
          </button>
        </div>
        {/if}
        <button
          class="px-4 py-2 bg-gray-800 text-white hover:bg-gray-900 rounded"
          on:click={()=>{
              if (get(windowState).type === windowStateType.TEST_SCREEN) {
                windowState.update(u => ({ ...u, type: windowStateType.MY_PROJECTS}))
              }
              else {
                windowState.update(u => ({ ...u, type: windowStateType.TEST_SCREEN}))
              }
              console.log(get(profileStore));

          }}
        >
        TEST_MODE
        </button>
      </div>
    </div>
  </header>
  
  
  