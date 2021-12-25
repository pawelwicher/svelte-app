<script lang="ts">
  import Router from 'svelte-spa-router';
  import Home from './pages/Home.svelte';
  import About from './pages/About.svelte';

  type App = { title: string }

  let app: App = { title: 'My Svelte App' };

</script>

<nav>
  <a href="/#/">Home</a>
  <a href="/#/about">About</a>
</nav>

<main>
  <h1>{ app.title }</h1>

  <Router routes={{
    '/': Home,
    '/about': About
  }} />
    
</main>

<style>
  h1 {
    color: cornflowerblue;
  }
</style>