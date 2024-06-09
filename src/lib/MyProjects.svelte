<script>
    import ProjectProfile from "./ProjectProfile.svelte";

</script>

<main class="flex flex-col items-center gap-4 w-full ">
        <div class="flex gap-4 w-full">
            <ProjectProfile imageUrl="/1.jpg"/>
            <ProjectProfile imageUrl="/2.jpg"/>
            <ProjectProfile imageUrl="/3.jpg"/>
        </div>
        <div class="flex gap-4 w-full">
            <ProjectProfile imageUrl="/6.jpg"/>
            <ProjectProfile imageUrl="/5.jpg" description=""/>
            <ProjectProfile imageUrl="/4.jpg" description='`\n\n`'/>
        </div>
    </main>