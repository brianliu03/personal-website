<script lang='ts'>
  import {
    AppBar,
    AppShell
  } from '@skeletonlabs/skeleton';
</script>

<AppShell regionPage="relative" slotPageHeader="sticky top-0 z-10">
      <svelte:fragment slot="pageHeader">
        <AppBar background="bg-surface-700" border="border-b-2 bg-primary-50" padding="px-10 py-4">
          <svelte:fragment slot="lead">
            <a class="h4 font-semibold" href="/" title="Go to top">
              Brian Liu
            </a>
          </svelte:fragment>
          <svelte:fragment slot="trail">
            <div class="flex items-center space-x-1 text-primary-300">
              <a class="btn hover:variant-soft-primary" href="/#about" title="About">
                About
              </a>
              <a class="btn hover:variant-soft-primary" href="/projects" title="Projects">
                Projects
              </a>
            </div>
            <div class="flex items-center space-x-6 text-primary-300">
              <a class="btn-icon btn-icon-sm hover:variant-soft-primary" href="https://github.com/brianliu03" title="Github" target="_blank">
                <i class="fa-brands fa-github text-lg" />
              </a>
              <a class="btn-icon btn-icon-sm hover:variant-soft-primary" href="https://www.linkedin.com/in/brianliu03/" title="LinkedIn" target="_blank">
                <i class="fa-brands fa-linkedin text-lg" />
              </a>
            </div>
          </svelte:fragment>
        </AppBar>
      </svelte:fragment>
      <!-- ... -->
    </AppShell>

