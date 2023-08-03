<script>
  import { Avatar } from "@skeletonlabs/skeleton";
  // @ts-ignore
  import { slide } from "svelte/transition";
  import { cubicOut } from 'svelte/easing';

  export let title = "Welcome, my name is Brian.";
  export let subtitle = "I am a visiting student at the University of Oxford and I believe in technology for the human good.";
  export let imageSrc = "https://via.placeholder.com/150";

  // @ts-ignore
  function fadeSlide(node, params) {
  const existingTransform = getComputedStyle(node).transform.replace('none', '');

  return {
    delay: params.delay || 0,
    duration: params.duration || 400,
    // @ts-ignore
    css: (t, u) => {
      const translateY = (1 - t) * (params.direction === 'top' ? -50 : 50);
      return `transform-origin: center; transform: ${existingTransform} translateY(${translateY}%); opacity: ${t};`;
    }
  };
}
</script>

<div class="flex items-center mx-20 space-x-20 h-screen">
  <div class="flex-1">
    <h1 class="h2 mb-4" transition:fadeSlide="{{delay: 0, direction: 'top'}}">
      {#if title}
        {title}
      {/if}
    </h1>
    <h2 class="h4" transition:fadeSlide="{{delay: 1000}}">
      {#if subtitle}
        {subtitle}
      {/if}
    </h2>
  </div>
  <Avatar src={imageSrc} width="w-48" rounded="rounded-3xl"/>
</div>