<script>
  import { fade, fly } from "svelte/transition";
  import { onMount } from "svelte";

  export let title = "Welcome, my name is Brian.";
  export let subtitle = "I am a visiting student at the University of Oxford and I believe in technology for the human good.";
  export let imageSrc = "/images/hero_portrait.jpg";

  let visible = false;

  onMount(() => {
    visible = true;
    console.log("Hero mounted");
  });
</script>

<div class="flex-row">
  <div class="flex items-center lg:mx-20 md:mx-10 sm:mx-5 lg:py-40 md:py-20 sm:py-10 lg:space-x-20 md:space-x-10 sm:space-x-5">
    <div class="flex-1">
      {#if visible}
        <h1 class="h2 mb-4" in:fly="{{ y: 20, duration: 500 }}">
          {title}
        </h1>
      {/if}
      {#if visible}
        <h2 class="h4 lg:mt-10" in:fly="{{ y: 250, duration: 1000, delay: 500 }}">
          {subtitle}
        </h2>
      {/if}
    </div>
    {#if visible}
      <img src={imageSrc} class="w-48 h-48 object-cover rounded-3xl" alt="Avatar" in:fly="{{ y: -250, duration: 1000, delay: 1250 }}"/>
    {/if}
  </div>
  <footer class="flex justify-center lg:mt-60 md:mt-10 sm:mt-5 sticky bottom-0">
    {#if visible}
      <a class="btn hover:variant-soft-primary flex-col down-arrow" href="/#about" style="cursor: pointer;" in:fly="{{ y: -500, duration: 1000, delay: 750 }}">
        <i class="fa-solid fa-chevron-down text-2xl" />
      </a>
    {/if}
    </footer>
</div>

<style>
  .down-arrow {
    animation: bounce 2s infinite;
  }

  @keyframes bounce {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-5px);
    }
    100% {
      transform: translateY(0);
    }
  }
</style>