<script>
  import { page } from "$app/stores";
  import { AppRail, AppRailAnchor } from "@skeletonlabs/skeleton";

  import Icon from "@iconify/svelte/offline";
  import iconLibrary from "@iconify-icons/material-symbols/library-books-outline";
</script>

<AppRail>
  <AppRailAnchor href="/" selected={$page.url.pathname === "/"} title="Library">
    <svelte:fragment slot="lead">
      <Icon icon={iconLibrary} width="24" />
    </svelte:fragment>
    <span>Library</span>
  </AppRailAnchor>
</AppRail>
