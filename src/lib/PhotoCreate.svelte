<script>
    import { writable } from 'svelte/store';
    
    let image = null;
    let title = '';
    const message = writable('');
  
    async function uploadImage() {
      const formData = new FormData();
      formData.append('image', image);
      formData.append('title', title);
  
      const response = await fetch('http://127.0.0.1:8000/images/', {
        method: 'POST',
        body: formData,
      });
      console.log(response);
      if (response.ok) {
        message.set('Image uploaded successfully!');
        title = '';
        image = null;
      } else {
        message.set('Failed to upload image.');
      }
    }
  </script>
  
  <section class="container mx-auto border border-green-500 px-4">
    <h1>Upload Image</h1>
    <input type="text" placeholder="Image Title" bind:value={title} />
    <input type="file" on:change={(e) => (image = e.target.files[0])} />
    <button on:click={uploadImage}>Upload</button>
    <p>{$message}</p>
  </section>