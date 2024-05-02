<script>
    export let avatar;
    export let username;
    export let first_name;
    export let last_name;
    console.log(avatar);
    
    if (avatar === null){
        avatar = "/default-avatar.png";
    }
    else {
        avatar = `${avatar}`;
    }
</script>

<div class="flex items-center space-x-4 p-4 bg-white shadow rounded-lg">
    <!-- Аватарка -->
    <img
      class="w-16 h-16 rounded-full object-cover"
      src={avatar}
      alt={username +" avatar"}
    />
  
    <!-- Информация о пользователе -->
    <div>
      <!-- Ник -->
      <h3 class="text-lg font-semibold">{username}</h3>
      <!-- Имя и фамилия -->
      <p class="text-gray-500">{first_name} {last_name}</p>
    </div>
  </div>