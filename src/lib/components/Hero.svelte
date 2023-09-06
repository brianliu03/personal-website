<script>
  import { fade, fly } from "svelte/transition";
  import { onMount } from "svelte";

  export let welcome = "Welcome, my name is";
  export let name = "Brian Liu";
  export let sub = "I like to create software to empower others.";

  let visible = false;

  // The current housing crisis has captured my attention, and I am exploring statistical models to chronicle historical events and find relationships that explain variation. I am also interested in the intersection of math, music, and creativity. This includes human computer interaction, stochastic processes, and machine learning.

  function goToExperience() {
    const experienceElement = document.getElementById("about");
    if (experienceElement) {
      experienceElement.scrollIntoView({ behavior: "smooth" });
    }
  }

  onMount(() => {
    visible = true;
    console.log("Hero mounted");
  });
</script>

<div class="flex min-h-screen flex-col -mt-24 justify-center ml-24 space-y-3 scale-75 md:scale-90 lg:scale-100">
  {#if visible}
    <div class="flex space-x-4">
      <div class="w-52 h-4 bg-gradient-to-r from-primary-500 to-sky-500 z-0" in:fly="{{ x: 100, duration: 1250, delay: 1250 }}"/>
      <div class="w-4 h-4 rounded-full bg-surface-300 z-0" in:fly="{{ x: 300, duration: 1250, delay: 1250 }}"/>
    </div>
    <div class="flex space-x-4">
      <div class="w-36 h-4 bg-gradient-to-r from-purple-300 to-blue-300 z-0" in:fly="{{ x: 100, duration: 1250, delay: 1250 }}"/>
      <div class="w-12 h-4 bg-surface-300 z-0" in:fly="{{ x: 200, duration: 1250, delay: 1250 }}"/>
    </div>
    <div class="flex space-x-4">
      <div class="w-56 h-4 bg-gradient-to-r from-primary-500 to-sky-500 z-0" in:fly="{{ x: 100, duration: 1250, delay: 1250 }}"/>
      <div class="w-12 h-4 bg-surface-300 z-0" in:fly="{{ x: 400, duration: 1250, delay: 1250 }}"/>
      <div class="w-28 h-4 bg-gradient-to-r from-purple-300 to-blue-300 z-0" in:fly="{{ x: 200, duration: 1250, delay: 1250 }}"/>
    </div>
    <div class="flex space-x-4">
      <div class="w-48 h-4 bg-gradient-to-r from-purple-300 to-blue-300 z-0" in:fly="{{ x: 100, duration: 1250, delay: 1250 }}"/>
      <div class="w-20 h-4 bg-surface-300 z-0" in:fly="{{ x: 200, duration: 1250, delay: 1250 }}"/>
      <div class="w-4 h-4 rounded-full bg-surface-300 z-0" in:fly="{{ x: 300, duration: 1250, delay: 1250 }}"/>
      <div class="w-24 h-4 bg-gradient-to-r from-amber-400 to-red-400 z-0" in:fly="{{ x: 300, duration: 1250, delay: 1250 }}"/>
      <div class="w-12 h-4 bg-surface-300 z-0" in:fly="{{ x: 400, duration: 1250, delay: 1250 }}"/>
    </div>
    <div/>
    <div/>
    <div class="flex space-x-4">
      <div class="ml-16 w-4 h-4 bg-surface-300 z-0" in:fly="{{ x: 100, duration: 1250, delay: 1250 }}"/>
      <div class="w-32 h-4 bg-gradient-to-r from-primary-500 to-sky-500 z-0" in:fly="{{ x: 200, duration: 1250, delay: 1250 }}"/>
    </div>
    <h2 class="h3 lg:h2 ml-12 z-0 text-surface-50" in:fly="{{ y: 20, duration: 500 }}">
      {welcome}
    </h2>
    <h1 class="h2 lg:h1 font-semibold ml-12 z-0 text-secondary-400" in:fly="{{ y: 20, duration: 500 }}">
      {name}
    </h1>
    <h3 class="h4 md:h3 ml-12 z-0" in:fly="{{ y: 250, duration: 1000, delay: 500 }}">
      {sub}
    </h3>
    <button type="button" on:click={goToExperience} class="max-w-fit btn variant-filled ml-12 z-0 text-surface-50" in:fly="{{ y: 250, duration: 1000, delay: 750 }}">See my experience</button>
    <div/>
    <div/>
    <div class="flex space-x-4">
      <div class="w-32 h-4 bg-gradient-to-r from-purple-300 to-blue-300 z-0" in:fly="{{ x: 100, duration: 1250, delay: 1250 }}"/>
      <div class="w-12 h-4 bg-surface-300 z-0" in:fly="{{ x: 200, duration: 1250, delay: 1250 }}"/>
      <div class="w-48 h-4 bg-gradient-to-r from-primary-500 to-sky-500 z-0" in:fly="{{ x: 300, duration: 1250, delay: 1250 }}"/>
    </div>
    <div class="flex space-x-4">
      <div class="w-52 h-4 bg-gradient-to-r from-amber-400 to-red-400 z-0" in:fly="{{ x: 100, duration: 1250, delay: 1250 }}"/>
      <div class="w-12 h-4 bg-surface-300 z-0" in:fly="{{ x: 200, duration: 1250, delay: 1250 }}"/>
      <div class="w-24 h-4 bg-gradient-to-r from-purple-300 to-blue-300 z-0" in:fly="{{ x: 300, duration: 1250, delay: 1250 }}"/>
      <div class="w-4 h-4 rounded-full bg-surface-300 z-0" in:fly="{{ x: 400, duration: 1250, delay: 1250 }}"/>
    </div>
    <div/>
    <div class="flex space-x-4">
      <div class="w-16 h-4 bg-gradient-to-r from-primary-500 to-sky-500 z-0" in:fly="{{ x: 100, duration: 1250, delay: 1250 }}"/>
      <div class="w-12 h-4 bg-surface-300 z-0" in:fly="{{ x: 200, duration: 1250, delay: 1250 }}"/>
    </div>
    <div class="flex space-x-4">
      <div class="w-52 h-4 bg-gradient-to-r from-primary-500 to-sky-500 z-0" in:fly="{{ x: 100, duration: 1250, delay: 1250 }}"/>
    </div>
    <div class="flex space-x-4">
      <div class="w-40 h-4 bg-gradient-to-r from-purple-300 to-blue-300 z-0" in:fly="{{ x: 100, duration: 1250, delay: 1250 }}"/>
      <div class="w-16 h-4 bg-surface-300 z-0" in:fly="{{ x: 200, duration: 1250, delay: 1250 }}"/>
      <div class="w-24 h-4 bg-gradient-to-r from-amber-400 to-red-400 z-0" in:fly="{{ x: 300, duration: 1250, delay: 1250 }}"/>
    </div>
  {/if}
</div>
