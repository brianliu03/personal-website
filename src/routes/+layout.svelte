<script lang='ts'>
	// The ordering of these imports is critical to your app working properly
	import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';

  import {
    AppBar,
    AppShell
  } from '@skeletonlabs/skeleton';


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
    <AppShell regionPage="relative" slotPageHeader="sticky top-0 z-10">
      <svelte:fragment slot="pageHeader">
        
        <AppBar>
          <svelte:fragment slot="lead">Title</svelte:fragment>
          <svelte:fragment slot="trail">Trail</svelte:fragment>
        </AppBar>

      </svelte:fragment>
      <!-- ... -->
    </AppShell>
  </svelte:fragment>
	<!-- Router Slot -->
	<slot />
	<!-- ---- / ---- -->
	<svelte:fragment slot="pageFooter">Page Footer</svelte:fragment>
	<!-- (footer) -->
</AppShell>
