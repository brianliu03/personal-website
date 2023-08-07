<script>
  import { Avatar } from "@skeletonlabs/skeleton";
  import { fade, fly } from "svelte/transition";
  import { onMount } from "svelte";

  export let title = "Welcome, my name is Brian.";
  export let subtitle = "I am a visiting student at the University of Oxford and I believe in technology for the human good.";
  export let imageSrc = "https://via.placeholder.com/150";

  let visible = false;

  onMount(() => {
    visible = true;
    console.log("Hero mounted");
  });
</script>

<div class="flex items-center mx-20 space-x-20 h-screen">
  <div class="flex-1">
    {#if visible}
      <h1 class="h2 mb-4" transition:fly="{{ y: -200, duration: 1000 }}">
        {title}
      </h1>
    {/if}
    {#if visible}
      <h2 class="h4" transition:fly="{{ y: 200, duration: 1000 }}">
        {subtitle}
      </h2>
    {/if}
  </div>
  <Avatar src={imageSrc} width="w-48" rounded="rounded-3xl"/>
</div>