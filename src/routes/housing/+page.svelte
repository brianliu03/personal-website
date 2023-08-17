<script lang="ts">
	import { onMount } from 'svelte';
  import { fade, fly } from 'svelte/transition';
  import type { PageData } from './$types';
  
  export let title = "Crossroads of a Crisis: Housing in San Francisco"

  let visible = false;

  onMount(() => {
    visible = true
      console.log("Housing page mounted");
  });
</script>

<div class="flex-row">
  <div class="flex items-center">
    <div class="flex-1">
      {#if visible}
        <h1 class="h2 mb-4" in:fly="{{ y: 20, duration: 500 }}">
          {title}
        </h1>
      {/if}
    </div>
  </div>
</div>