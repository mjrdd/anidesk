<script>
  import Card from "./Card.svelte";
  import { Tab, TabGroup } from "@skeletonlabs/skeleton";
  import { recentEpisodes, topAiring } from "./manager";

  export let data;
  $: console.log(data);

  let currentTab = "top-airing";
</script>

<TabGroup>
  <Tab bind:group={currentTab} name="top-airing" value="top-airing">Top Airing</Tab>
  <Tab bind:group={currentTab} name="recent-episodes" value="recent-episodes">Recent Episodes</Tab>

  <svelte:fragment slot="panel">
    {#if currentTab === "top-airing"}
      <section class="flex flex-wrap gap-4 p-4">
        {#each data.topAiring.results ?? [] as anime}
          <Card data={anime} />
        {/each}
      </section>
    {/if}
    {#if currentTab === "recent-episodes"}
      <section class="flex flex-wrap gap-4 p-4">
        {#each data.recentEpisodes.results ?? [] as anime}
          <Card data={anime} />
        {/each}
      </section>
    {/if}
  </svelte:fragment>
</TabGroup>
