<script>
  import { fade, fly } from "svelte/transition";
  import { onMount } from "svelte";

  export let title = "Welcome, my name is Brian.";
  export let subtitle = "I am a visiting student at the University of Oxford and a student of Bowdoin College.";
  export let imageSrc = "/images/hero_portrait.jpg";

  let visible = false;

  onMount(() => {
    visible = true;
    console.log("Hero mounted");
  });
</script>

<div class="flex flex-col m-10">
  <div class="flex items-center justify-center space-x-64">
    <div class="flex flex-col">
      {#if visible}
        <h1 class="h2 mb-10" in:fly="{{ y: 20, duration: 500 }}">
          {title}
        </h1>
      {/if}
      {#if visible}
        <h2 class="h4" in:fly="{{ y: 250, duration: 1000, delay: 500 }}">
          {subtitle}
        </h2>
      {/if}
    </div>
    {#if visible}
      <img src={imageSrc} class="w-72 h-72 object-cover rounded-3xl" alt="Avatar" in:fly="{{ y: -250, duration: 1000, delay: 1250 }}"/>
    {/if}
  </div>
  <footer class="flex sticky bottom-0 justify-center">
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