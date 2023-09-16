<script>
  import { goto } from "$app/navigation";

  /**
   *
   * @param {SubmitEvent & { currentTarget: EventTarget & HTMLFormElement }} e
   */
  export async function searchAnime(e) {
    const form = new FormData(e.currentTarget);
    const search = form.get("search") || "";
    await goto(`/library/search?keyword=${search}`);
  }
</script>

<header class="flex justify-center p-4">
  <form on:submit|preventDefault={searchAnime} class="flex w-full max-w-xl gap-3">
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

<slot />
