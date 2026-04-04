<script lang="ts">
  import { goto } from '$app/navigation';
  import { auth } from '$lib/firebase/client';
  import { signInWithEmailAndPassword } from 'firebase/auth';
  // import { auth } from '$lib/firebase/client';
  // import { signInWithEmailAndPassword } from 'firebase/auth';

  let loggedIn = $state(false)
  async function testLogin() {

    loggedIn = !loggedIn;
    try {
      await signInWithEmailAndPassword(auth, 'jim@home.com', '123456');
      goto('/test');
    } catch (e) {
      console.error('Login failed:', e);
    }
  }
</script>

<div class="window">
<div class="login">
 <output class:success={loggedIn}>{loggedIn? "logged in": "logged out"}</output>

<button  onclick={testLogin}>Dev Test Login</button>
</div>
</div>


<style>
.window{
  height: 100dvh;
  width:100dvw;
  background: #1c1410;
  color:white;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.login{
display:flex; flex-direction: column; align-items: center; gap:1rem;

 }
 output{
  color:red;
 }
  output.success { color: limegreen; }
  button{
    box-shadow: 0 0 2px 0 oklab(99.259% 0.00203 0.00052);
    padding-block: 0.25rem;
    padding-inline: 1rem;

  }
</style>
