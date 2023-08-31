<script lang='ts'>
  import PageAppBar from '$lib/components/PageAppBar.svelte';
  import PageFooter from '$lib/components/PageFooter.svelte';

  import '../app.postcss';

  import { AppShell } from '@skeletonlabs/skeleton';

  import { computePosition, autoUpdate, offset, shift, flip, arrow } from '@floating-ui/dom';

  import { dev } from '$app/environment';
  import { inject } from '@vercel/analytics';
 
  inject({ mode: dev ? 'development' : 'production' });

  import { storePopup } from '@skeletonlabs/skeleton';
  storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });

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
	<svelte:fragment slot="pageFooter">
    <PageFooter></PageFooter>
  </svelte:fragment>
	<!-- (footer) -->
</AppShell>
