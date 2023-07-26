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
        <AppBar background="bg-surface-50-900-token" border="border-b-2 bg-primary-50" padding="px-10 py-4">
          <svelte:fragment slot="lead">
            <a class="w-20" href="/" title="Go to top">
              Brian Liu
            </a>
          </svelte:fragment>
          <svelte:fragment slot="trail">
            <!-- below but now with about, projects, github, linkedin-->
            <div class="flex items-center space-x-4">
              <a href="/about" title="About">
                About
              </a>
              <a href="/projects" title="Projects">
                Projects
              </a>
              <a href="https://github.com/brianliu03" title="Github">
                Github
              </a>
              <a class="btn-icon btn-icon-sm hover:variant-soft-primary" href="https://discord.gg/EXqV7W8MtY" target="_blank" rel="noreferrer">
                <i class="fa-brands fa-discord" />
              </a>
              <a href="https://www.linkedin.com/in/brianliu03/" title="LinkedIn">
                LinkedIn
              </a>
          </svelte:fragment>
        </AppBar>
      </svelte:fragment>
      <!-- ... -->
    </AppShell>
  </svelte:fragment>

	<!-- Router Slot -->
	<div class="container p-10 mx-auto">
    <slot />
  </div>
	<!-- ---- / ---- -->
	<svelte:fragment slot="pageFooter">Page Footer</svelte:fragment>
	<!-- (footer) -->
</AppShell>
