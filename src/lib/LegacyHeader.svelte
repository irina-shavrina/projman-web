<script>
    import { onMount } from 'svelte';
    import { login, register, getResource } from '../services/api';
    import { authStore } from '../stores/auth';
    import { clearTokens } from '../stores/auth';
    
    function logout() {
        clearTokens();  
    }
    let username = '';
    let password = '';
    
    async function handleRegister() {
        try {
            const result = await register(username, password);
            console.log('Registered:', result);
        } catch (error) {
            console.error(error);
        }
    }
    
    async function handleLogin() {
        try {
            const result = await login(username, password);
            console.log('Logged in:', result);
        } catch (error) {
            console.error(error);
        }
    }
    
    async function fetchResource() {
        try {
            const result = await getResource();
            console.log('Resource:', result);
        } catch (error) {
            console.error(error);
        }
    }
    
    onMount(fetchResource);
    </script>
    <header>
        <div>
            <input type="text" placeholder="Username" bind:value={username} />
            <input type="password" placeholder="Password" bind:value={password} />
        
            <button on:click={handleRegister}>Register</button>
            <button on:click={handleLogin}>Login</button>
            <button on:click={fetchResource}>Get Resource</button>
            <button on:click={logout}>Logout</button>
        </div>
</header>