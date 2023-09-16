<script>
  import { AppShell } from "@skeletonlabs/skeleton";
  import AppRail from "./AppRail.svelte";
</script>

<AppShell>
  <svelte:fragment slot="sidebarLeft">
    <AppRail />
  </svelte:fragment>

  <slot />
</AppShell>
