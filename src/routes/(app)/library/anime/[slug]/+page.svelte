<script>
  export let data;
</script>

{#if data.info}
  <div class="grid grid-cols-[16rem_auto] gap-4 p-4 lg:gap-8 lg:p-8">
    <div>
      <img src={data.info.image} alt={data.info.title} />
    </div>
    <div>
      <h1 class="h1">{data.info.title}</h1>
      <p>{data.info.description}</p>
    </div>
  </div>
{/if}
