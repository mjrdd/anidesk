<script>
  import { onMount } from "svelte";
  import { popularAnimeStore, requestPopularAnimeList } from "./manager";

  import Card from "./Card.svelte";

  onMount(async () => {
    $popularAnimeStore = await requestPopularAnimeList();
  });

  function requestAnimePage() {}
</script>

<header class="flex justify-center p-4">
  <form class="flex w-full max-w-lg gap-3">
    <input
      type="text"
      class="input variant-form-material"
      name="search"
      placeholder="Search anime"
      autocomplete="off"
    />
    <button type="submit" class="variant-filled-primary btn btn-sm">Search</button>
  </form>
</header>

<section class="flex flex-wrap justify-center gap-4 p-4">
  {#each $popularAnimeStore ?? [] as anime}
    <Card info={anime.info} on:click={requestAnimePage} />
  {/each}
</section>
