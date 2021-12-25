<script lang="ts">
  
  let promise = fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Bourbon")
    .then(response => response.json());
    
</script>

{#await promise}
  <p>...waiting</p>
{:then data}
  <ul>
    {#each data.drinks as d}
      <li>{d.strDrink}</li>
    {/each}
  </ul>
{:catch error}
  <p>{error.message}</p>
{/await}