<script>
  /** @type {Record<string, string>} */
  export let info;
</script>

<button type="button" class="card card-hover grid h-80 w-48 grid-rows-[16rem_auto]" on:click>
  {#if info.image}
    <img src={info.image} alt={info.title} class="h-full w-full object-cover" />
  {:else}
    <div></div>
  {/if}

  <div class="card-footer overflow-hidden text-center">
    <p class="mb-2 overflow-hidden text-ellipsis whitespace-nowrap">{info.title}</p>
    <p class="text-sm">{info.releaseDate}</p>
  </div>
</button>
