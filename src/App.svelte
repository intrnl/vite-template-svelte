<script>
  import logo from './logo.svg';

  let count = 0;
  let increment = () => count++;
</script>

<div class='app'>
  <img src={logo} height='100' width='100' alt='Svelte logo' />
  <p>Hello Vite + Svelte!</p>
  <button on:click={increment}>count is {count}</button>
</div>

<style>
  .app {
    text-align: center;
    padding: 48px;
  }
</style>
