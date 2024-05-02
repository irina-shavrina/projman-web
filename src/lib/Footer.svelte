<script>
    import { onMount } from 'svelte';
    import { writable } from 'svelte/store';
  
    const user = writable(null);
    // Стейты для данных формы
    let username = '';
    let password = '';
    let firstName = '';
    let lastName = '';
    let avatar = null;
  
    let errorMessage = '';
    let successMessage = '';
  
    async function registerUser() {
      const formData = new FormData();
  
      // Заполняем formData данными из формы
      formData.append('username', username);
      formData.append('password', password);
      formData.append('first_name', firstName);
      formData.append('last_name', lastName);
      if (avatar !== null){
        formData.append('avatar', avatar); 
        console.log("AVATAR",avatar)
      }
  
      try {
        // Отправляем запрос на сервер
        const response = await fetch('http://localhost:8000/account/new_register/', {
          method: 'POST',
          body:  formData,
          headers: {
            'Accept': 'application/json'
          },
        });
  
        // Обработка ответа
        if (response.ok) {
          const result = await response.json();
          console.log(result['user']);
          successMessage = 'Registration successful!';
          errorMessage = ''; 
          console.log('Успешный ответ:', user);
        } else {
          const error = await response.json();
          errorMessage = `Registration failed: ${JSON.stringify(error)}`;
        }
      } catch (error) {
       
        errorMessage = `An error occurred: ${error}`;
      }
    }
  </script>
  <footer>
  <div>
    <h1>Register</h1>
  
    <label>
      Username:
      <input type="text" bind:value={username} />
    </label>
  
    <label>
      Password:
      <input type="password" bind:value={password} />
    </label>
  
    <label>
      First Name:
      <input type="text" bind:value={firstName} />
    </label>
  
    <label>
      Last Name:
      <input type="text" bind:value={lastName} />
    </label>

  
    <label>
      Avatar:
      <input type="file" on:change={(e) => (avatar = e.target.files[0])} />
    </label>
  
    <button on:click={registerUser}>Register</button>
  
    
  </div>
  <div>
    {#if successMessage}
    <p>{successMessage}</p>
    <p>{user}</p>
  {/if}

  {#if errorMessage}
    <p>{errorMessage}</p>
  {/if}
  </div>
  </footer>