<script lang="ts">
	import type { User } from '@prisma/client';
	import { onMount } from 'svelte';
	import { v4 as uuidv4 } from 'uuid';

	let user: User = {
		id: uuidv4(),
		email: '',
		name: '',
		password: ''
	};

  let errors: {
    email: string;
    name: string;
    password: string;
  } = {
    email: '',
    name: '',
    password: ''
  }

	function createUser() {

    validateName();
    validateEmail();
    validatePassword();
	
    if(errors.email || errors.name || errors.password) {
      return;
    }
    
		fetch('/api/users', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(user)
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
			});
	}

  function validateName() {
    if (!user.name) {
      errors.name = 'Name is required';
    }
  }

  function validateEmail() {
   //comprobar que el campo email es un email valido con regex
    if (!user.email) {
      errors.email = 'Email is required';
    }

    if (!user.email.includes('@')) {
      errors.email = 'Email is not valid';
    }

    

  }

  function validatePassword() {
    if (user.password.length < 3) {
      alert('Password must be at least 3 characters long');
    }
  }

</script>

<form on:submit|preventDefault={createUser}>
	<div class="form__input">
		<label for="email">Email</label>
		<input type="email" name="email" id="email" bind:value={user.email} on:change={validateEmail}/>
    {#if errors.email}
      <p>{errors.email}</p>
    {/if}
	</div>
	<div class="form__input">
		<label for="name">Name</label> 
    <input type="text" name="name" id="name" bind:value={user.name} on:change={validateName}/>
    {#if errors.name}
      <p>{errors.name}</p>
    {/if}
	</div>
	<div class="form__input">
		<label for="password">Password</label>
		<input type="password" name="password" id="password" bind:value={user.password} on:change={validatePassword} />
    {#if errors.password}
      <p>{errors.password}</p>
    {/if}
	</div>

	<button type="submit">Register</button>
</form>
