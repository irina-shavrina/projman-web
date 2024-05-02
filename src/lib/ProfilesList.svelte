<script>
    import { onMount } from 'svelte';
    import { writable } from 'svelte/store';
    import { getProfiles } from "../services/api";
    import Profile from './Profile.svelte';
    const profiles = writable([]);
    getProfiles().then((result)=>{
        profiles.set(result);
    });
</script>
<section class="container mx-auto border border-green-500 px-4" style="width:300px">
  <h1>Profiles</h1>
  <ul>
    {#each $profiles as profile}
        <Profile 
            avatar={profile.avatar} 
            username={profile.username}
            first_name={profile.first_name}
            last_name={profile.last_name}
         />
    {/each}
  </ul>
</section>