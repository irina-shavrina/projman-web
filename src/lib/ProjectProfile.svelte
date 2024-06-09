<script>
    export let title = "Назва";
    export let description = "Опис Опис Опис Опис Опис Опис Опис Опис Опис Опис Опис Опис Опис Опис Опис Опис Опис Опис Опис Опис Опис Опис Опис Опис Опис Опис Опис Опис Опис Опис Опис Опис Опис Опис Опис Опис Опис Опис Опис Опис Опис Опис Опис Опис Опис Опис Опис Опис Опис Опис Опис Опис Опис Опис Опис Опис Опис Опис Опис Опис Опис Опис Опис Опис Опис Опис Опис Опис";
    export let imageUrl = "/1.jpg";
</script>
<style>
    .parent:hover .overlay {
        opacity: 0.5;
    }
    .transparent {
        background-color: rgba(255, 255, 255, 0); /* Adjust the transparency level here */
    }
</style>

<div class="relative w-1/3 m-4 flex flex-col shadow-lg parent">
    <div class="absolute inset-0 bg-gray-800 opacity-0 transition-opacity duration-300 overlay"></div>
    <div class="relative mx-auto flex flex-col w-full">
        <div class="bg-cover bg-center h-40 flex items-end w-full" style="background-image: url('{imageUrl}');">
            <h1 class="text-4xl font-bold text-white bg-gray-800 bg-opacity-75 px-2 py-1 rounded">{title}</h1>
        </div>
        <div class="w-full p-4 transparent">
            <p class="mt-4 text-gray-700">{description}</p>
        </div>
    </div>
</div>