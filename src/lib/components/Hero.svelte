<script>
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

<div class="flex-row h-4/5">
  <div class="flex items-center mx-20 py-40 space-x-20">
    <div class="flex-1">
      {#if visible}
        <h1 class="h2 mb-4" transition:fly="{{ y: 20, duration: 500 }}">
          {title}
        </h1>
      {/if}
      {#if visible}
        <h2 class="h4" transition:fly="{{ y: 250, duration: 1000, delay: 500 }}">
          {subtitle}
        </h2>
      {/if}
    </div>
    {#if visible}
      <img src={imageSrc} class="w-48 h-48 object-cover rounded-3xl" alt="Avatar" transition:fly="{{ y: -250, duration: 1000, delay: 1250 }}"/>
    {/if}
  </div>
  <div class="flex justify-center">
    <a class="btn hover:variant-soft-primary flex-col" href="/#about" style="cursor: pointer;" transition:fade="{{duration: 1000}}">
      <i class="fa-solid fa-chevron-down text-2xl" />
    </a>
  </div>
</div>
