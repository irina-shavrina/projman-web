<script>
    import { onMount } from 'svelte';
    import { writable } from 'svelte/store';
  
    const image = writable(null);
  
    // Получение изображения по ID (например, 1)
    async function fetchImage(id) {
      const response = await fetch(`http://127.0.0.1:8000/images/${id}/`);
      const data = await response.json();
      console.log(data);
      image.set(data);
    }
  </script>
  
  
  <section class="container mx-auto border border-green-500 px-4">
  <button on:click={() => fetchImage(1)}>Load Image with ID 1</button>
  
  {#if $image}
    <div>
      <h3>{$image.title}</h3>
      <img src={$image.image} alt={$image.title} class="rounded-full w-64 h-64" />
    </div>
  {/if}
</section>