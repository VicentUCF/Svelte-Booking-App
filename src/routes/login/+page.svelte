<script lang="ts">
	import { goto } from '$app/navigation';
  import { login } from '../../store';
  let email = '';
  let password = '';

  const doLogin = () => {
    login.update(() => true);
    window.localStorage.setItem('login', 'true');
    goto('/courts');
  }
</script>

<h1>Login</h1>
<!-- formulario de login -->
<form on:submit|preventDefault={doLogin}>
  <label for="email">Email</label>
  <input type="email" name="email" id="email" bind:value={email} />
  <label for="password">Password</label>
  <input type="password" name="password" id="password" bind:value={password} />
  <button type="submit">Login</button>
</form>