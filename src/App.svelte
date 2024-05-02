<script>
  import Footer from './lib/Footer.svelte';
  import Header from './lib/Header.svelte';
  import Main from './lib/Main.svelte';
  import TailwindCss from './lib/TailwindCSS.svelte';
  import PhotoCreate from './lib/PhotoCreate.svelte';
  import PhotoList from './lib/PhotoList.svelte';
  import PhotoOne from './lib/PhotoOne.svelte';
    import ProfilesList from './lib/ProfilesList.svelte';

</script>


<Header/> <main class="pt-20 px-4">
  <h1 class="text-2xl font-bold mb-4">Welcome to MicroJira</h1>
  <p class="mb-4">
    This is a project management platform designed to help you organize and manage tasks efficiently.
  </p>

  <h2 class="text-xl font-semibold">Features</h2>
  <ul class="list-disc pl-5">
    <li>Task management</li>
    <li>Team collaboration</li>
    <li>Real-time updates</li>
  </ul>
</main>

<!-- Navigation -->
<nav class="mt-8 px-4">
  <ul class="flex space-x-4">
    <li><a href="#home" class="text-gray-600 hover:text-gray-900">Home</a></li>
    <li><a href="#projects" class="text-gray-600 hover:text-gray-900">Projects</a></li>
    <li><a href="#teams" class="text-gray-600 hover:text-gray-900">Teams</a></li>
    <li><a href="#settings" class="text-gray-600 hover:text-gray-900">Settings</a></li>
  </ul>
</nav>
<ProfilesList/>
<!-- 
<PhotoList/>
<PhotoOne/>
<PhotoCreate/>
<Main/>
<Footer/>
 -->
<TailwindCss/>