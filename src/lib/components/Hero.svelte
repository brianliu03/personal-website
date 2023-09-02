<script>
  import { fade, fly } from "svelte/transition";
  import { onMount } from "svelte";

  export let title = "Welcome, my name is Brian.";
  export let subtitle = "I am a visiting student at the University of Oxford and a student at Bowdoin College.";
  export let imageSrc = "/images/hero_portrait.jpg";
  export let svgHello = "/svg/hello.svg";
  export let about = "Hello! I am interested in utilizing technology for human good, addressing pressing humanitarian issues, and creating empowering software for all. Below, you can find my research, projects, work experience, and hobbies.";

  let visible = false;

  // The current housing crisis has captured my attention, and I am exploring statistical models to chronicle historical events and find relationships that explain variation. I am also interested in the intersection of math, music, and creativity. This includes human computer interaction, stochastic processes, and machine learning.

  onMount(() => {
    visible = true;
    console.log("Hero mounted");
  });
</script>

<div class="flex flex-col">
  <div class="flex flex-col sm:flex-row items-center justify-center space-x-16 mx-5 md:mx-10 md:space-x-32">
    <div class="flex flex-col">
      {#if visible}
        <h1 class="h2 lg:h1 mb-10" in:fly="{{ y: 20, duration: 500 }}">
          {title}
        </h1>
      {/if}
      {#if visible}
        <h2 class="h4 md:h3" in:fly="{{ y: 250, duration: 1000, delay: 500 }}">
          {subtitle}
        </h2>
      {/if}
    </div>
    {#if visible}
      <img src={imageSrc} class="w-32 sm:w-48 md:w-52 lg:w-72 object-cover rounded-3xl" alt="Avatar" in:fly="{{ y: -250, duration: 1000, delay: 1250 }}"/>
    {/if}
  </div>

<div class="flex flex-col place-content-center place-items-center sm:flex-row space-x-5 sm:space-x-10 my-10">
  {#if visible}
    <img src={svgHello} class="w-48 md:w-72" alt="Hello" in:fly="{{ y: -250, duration: 1000, delay: 1250 }}"/>
    <p class="inline h5 md:h4 sm:w-1/2" in:fly="{{ y: -250, duration: 1000, delay: 1250 }}">
      {about}
      Please feel free to
        <a class="text-primary-500" href="mailto: brianliu03@gmail.com" target="_blank">contact me</a>.
    </p>
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