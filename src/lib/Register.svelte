<script>
  import { writable } from 'svelte/store';
  import { register } from '../services/api.js';
  import { setTokens } from '../stores/auth';


  let username = '';
  let password = '';
  let firstName = '';
  let lastName = '';
  let avatar = null;

  async function registerUser() {
    try {
      const result = await register(username, password, firstName, lastName, avatar);
    } catch (error) {}
  }
</script>

<main class="flex flex-col items-left ">
  <h1 class="text-3xl font-bold mb-4">Register</h1>
  <div class="bg-gray-100 rounded-lg p-4 shadow-md w-full max-w-md">
    <label class="block mb-2">
      <span class="text-gray-700">Username:</span>
      <input type="text" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50" bind:value={username} />
    </label>

    <label class="block mb-2">
      <span class="text-gray-700">Password:</span>
      <input type="password" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50" bind:value={password} />
    </label>

    <label class="block mb-2">
      <span class="text-gray-700">First Name:</span>
      <input type="text" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50" bind:value={firstName} />
    </label>

    <label class="block mb-2">
      <span class="text-gray-700">Last Name:</span>
      <input type="text" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50" bind:value={lastName} />
    </label>

    <label class="block mb-2">
      <span class="text-gray-700">Avatar:</span>
      <input type="file" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50" on:change={(e) => (avatar = e.target.files[0])} />
    </label>

    <button class="mt-4 px-4 py-2 bg-gray-800 text-white hover:bg-gray-900 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50" on:click={registerUser}>
      Register
    </button>


  </div>
</main>