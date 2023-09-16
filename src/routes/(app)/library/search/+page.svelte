<script>
  import Card from "../Card.svelte";

  export let data;
</script>

<div class="flex flex-wrap gap-4 p-4 lg:p-8">
  {#each data.results ?? [] as anime}
    <Card data={anime} />
  {/each}
</div>
