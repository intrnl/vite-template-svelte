<script lang='ts'>
  let count: number = 0;

  function increment () { count++ }
  function decrement () { count-- }
</script>

<button on:click={decrement}>-</button>
<span>{count}</span>
<button on:click={increment}>+</button>

<style>
	span {
		color: red;
		font-weight: bold;
	}
</style>
