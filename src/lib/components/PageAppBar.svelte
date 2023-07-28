<script lang='ts'>
  
  import {
    AppBar,
    AppShell
  } from '@skeletonlabs/skeleton';


import type { ComponentEvents } from 'svelte';

function scrollHandler(event: ComponentEvents<AppShell>['scroll']) {
	console.log(event.currentTarget.scrollTop);
}

  
</script>

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
              <a class="btn-icon btn-icon-sm hover:variant-soft-primary" href="https://github.com/brianliu03" title="Github" target="_blank">
                <i class="fa-brands fa-github text-lg" />
              </a>
              <a class="btn-icon btn-icon-sm hover:variant-soft-primary" href="https://www.linkedin.com/in/brianliu03/" title="LinkedIn" target="_blank">
                <i class="fa-brands fa-linkedin text-lg" />
              </a>
          </svelte:fragment>
        </AppBar>
      </svelte:fragment>
      <!-- ... -->
    </AppShell>

