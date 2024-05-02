<script>
  import { onMount } from 'svelte';
  import { writable } from 'svelte/store';

  const images = writable([]);

  onMount(async () => {
    const response = await fetch('http://127.0.0.1:8000/images/');
    const data = await response.json();
    images.set(data);
  });
</script>

<section class="container mx-auto border border-green-500 px-4">
  <h1>Uploaded Images</h1>
  <ul>
    {#each $images as image}
    <li>
      <h3>{image.title}</h3>
      <img src={`${image.image}`} alt={image.title} width="100" />
    </li>
    {/each}
  </ul>
</section>