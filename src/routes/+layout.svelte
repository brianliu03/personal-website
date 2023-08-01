<script lang='ts'>
  import PageAppBar from '$lib/components/PageAppBar.svelte';


// Your custom Skeleton theme:
import '../theme.postcss';
// This contains the bulk of Skeletons required styles:
import '@skeletonlabs/skeleton/styles/skeleton.css';
// Finally, your application's global stylesheet (sometimes labeled 'app.css')
import '../app.postcss';

  import { AppShell } from '@skeletonlabs/skeleton';


import type { ComponentEvents } from 'svelte';

function scrollHandler(event: ComponentEvents<AppShell>['scroll']) {
	console.log(event.currentTarget.scrollTop);
}

  
</script>


<AppShell ... on:scroll={scrollHandler}> 

	<!-- (header) -->
	<!-- (sidebarLeft) -->
	<!-- (sidebarRight) -->

	<svelte:fragment slot="pageHeader">
    <PageAppBar></PageAppBar>
  </svelte:fragment>

	<!-- Router Slot -->
  
  <slot />

	<!-- ---- / ---- -->
	<svelte:fragment slot="pageFooter">Page Footer</svelte:fragment>
	<!-- (footer) -->
</AppShell>
