<script lang="ts">
	import { onMount } from 'svelte';
  import { fade, fly } from 'svelte/transition';
  import type { PageData } from './$types';
  
  export let title = "Music Portfolio";
  export let subtitle = "Away from coding, I spend a majority of my time on piano, studying music, and composing."

  let visible = false;

  onMount(() => {
    visible = true
      console.log("Music page mounted");
  });
</script>

<div class="flex-row">
  <div class="flex flex-col items-center">
    {#if visible}
      <h1 class="h2 mt-10" in:fly="{{ y: 20, duration: 500 }}">
        {title}
      </h1>
    {/if}
    {#if visible}
      <h2 class="h4 mt-10" in:fly="{{ y: 250, duration: 1000, delay: 500 }}">
        {subtitle}
      </h2>
    {/if}
  </div>
</div>