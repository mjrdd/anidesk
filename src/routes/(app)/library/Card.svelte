<script>
  /** @type {Record<string, string>} */
  export let data;
</script>

<a href="/library/anime/{data.id}" class="card card-hover grid h-80 w-48 grid-rows-[16rem_auto]">
  {#if data.image}
    <img src={data.image} alt={data.title} class="h-full w-full object-cover" />
  {:else}
    <div></div>
  {/if}

  <div class="card-footer overflow-hidden text-center">
    <p class="mb-2 overflow-hidden text-ellipsis whitespace-nowrap">{data.title}</p>
    <p class="text-sm">{data.releaseDate}</p>
  </div>
</a>
