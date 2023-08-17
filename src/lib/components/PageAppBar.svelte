<script lang='ts'>
  import {
    AppBar,
    AppShell,
    popup
  } from '@skeletonlabs/skeleton';
</script>


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
      <!-- Projects dropdown -->
      <button class="btn hover:variant-soft-primary" use:popup={{ event: 'click', target: 'features'}}>
        <span>Projects</span>
        <i class="fa-solid fa-caret-down opacity-50" />
      </button>
      <!-- Projects pop up -->
      <div class="card w-60" data-popup="features">
        <nav class="list-nav">
          <ul>
            <li>
              <a href="/housingsf" title="Housing SF">
                Housing in San Francisco
              </a>
            </li>
            <li>
              <a class="nav-link" href="/fractmuse" title="FractMuse">
                FractMuse
              </a>
            </li>
          </ul>
        </nav>
        <div class="arrow bg-primary-500" />
      </div>
      <a class="btn hover:variant-soft-primary" href="/music" title="Music">
        Music
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