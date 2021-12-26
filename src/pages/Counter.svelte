<script lang="ts">
  
  let count = 0;

  const incr = () => count++;
  const decr = () => count--;
    
</script>

<p>Counter = {count}</p>
<button on:click={incr}>+</button>
<button on:click={decr}>-</button>

<style>
  button {
    width: 25px;
    height: 25px;
  }
</style>