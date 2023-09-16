<script>
  import { onMount } from "svelte";
  import {
    animeMoviesStore,
    popularAnimeStore,
    requestAnimeMoviesList,
    requestPopularAnimeList
  } from "./manager";

  import Card from "./Card.svelte";
  import { Tab, TabGroup } from "@skeletonlabs/skeleton";

  onMount(async () => {
    $popularAnimeStore = await requestPopularAnimeList();
    $animeMoviesStore = await requestAnimeMoviesList();
  });

  let currentTab = "popular";

  function requestAnimePage() {}
</script>

<header class="flex justify-center p-4">
  <form class="flex w-full max-w-xl gap-3">
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

<TabGroup>
  <Tab bind:group={currentTab} name="popular" value="popular">Popular</Tab>
  <Tab bind:group={currentTab} name="movies" value="movies">Movies</Tab>

  <svelte:fragment slot="panel">
    {#if currentTab === "popular"}
      <section class="flex flex-wrap justify-center gap-4 p-4">
        {#each $popularAnimeStore ?? [] as anime}
          <Card info={anime.info} on:click={requestAnimePage} />
        {/each}
      </section>
    {/if}
    {#if currentTab === "movies"}
      <section class="flex flex-wrap justify-center gap-4 p-4">
        {#each $animeMoviesStore ?? [] as anime}
          <Card info={anime.info} on:click={requestAnimePage} />
        {/each}
      </section>
    {/if}
  </svelte:fragment>
</TabGroup>
