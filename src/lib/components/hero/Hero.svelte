<script>
  import { fade, fly } from "svelte/transition";
  import { onMount } from "svelte";

  export let welcome = "Welcome, my name is";
  export let name = "Brian Liu";
  export let sub = "I like to create software to empower others.";

  let visible = false;

  function goToExperience() {
  const experienceSection = document.getElementById('Experience');
  
  if (experienceSection) {
    console.log("Scrolling to experience section");
    console.log("Offset top:", experienceSection.offsetTop);
    console.log("Experience section:", experienceSection);
    experienceSection.scrollIntoView({ behavior: 'smooth' });
  } else {
    console.log("Experience section not found");
  }
}

  onMount(() => {
    visible = true;
    console.log("Hero mounted");
  });
</script>

<div class="flex min-h-screen flex-col justify-center ml-3 md:ml-32 space-y-3 scale-75 md:scale-90 lg:scale-100">
  {#if visible}
    <div class="flex space-x-4">
      <div class="w-52 h-4 bg-gradient-to-r from-primary-500 to-sky-500 z-0" in:fly="{{ x: 250, duration: 1250, delay: 1250 }}"/>
      <div class="w-4 h-4 rounded-full bg-surface-300 z-0" in:fly="{{ x: 350, duration: 1250, delay: 1250 }}"/>
    </div>
    <div class="flex space-x-4">
      <div class="w-36 h-4 bg-gradient-to-r from-purple-300 to-blue-300 z-0" in:fly="{{ x: 250, duration: 1250, delay: 1250 }}"/>
      <div class="w-12 h-4 bg-surface-300 z-0" in:fly="{{ x: 350, duration: 1250, delay: 1250 }}"/>
    </div>
    <div class="flex space-x-4">
      <div class="w-56 h-4 bg-gradient-to-r from-primary-500 to-sky-500 z-0" in:fly="{{ x: 250, duration: 1250, delay: 1250 }}"/>
      <div class="w-12 h-4 bg-surface-300 z-0" in:fly="{{ x: 350, duration: 1250, delay: 1250 }}"/>
      <div class="w-28 h-4 bg-gradient-to-r from-purple-300 to-blue-300 z-0" in:fly="{{ x: 450, duration: 1250, delay: 1250 }}"/>
    </div>
    <div class="flex space-x-4">
      <div class="w-48 h-4 bg-gradient-to-r from-purple-300 to-blue-300 z-0" in:fly="{{ x: 250, duration: 1250, delay: 1250 }}"/>
      <div class="w-20 h-4 bg-surface-300 z-0" in:fly="{{ x: 350, duration: 1250, delay: 1250 }}"/>
      <div class="w-4 h-4 bg-surface-300 z-0" in:fly="{{ x: 450, duration: 1250, delay: 1250 }}"/>
      <div class="w-24 h-4 bg-gradient-to-r from-amber-400 to-red-400 z-0" in:fly="{{ x: 550, duration: 1250, delay: 1250 }}"/>
      <div class="w-12 h-4 bg-surface-300 z-0" in:fly="{{ x: 650, duration: 1250, delay: 1250 }}"/>
    </div>
    <div/>
    <div/>
    <div class="flex space-x-4">
      <div class="ml-16 w-4 h-4 bg-surface-300 z-0" in:fly="{{ x: 250, duration: 1250, delay: 1250 }}"/>
      <div class="w-32 h-4 bg-gradient-to-r from-primary-500 to-sky-500 z-0" in:fly="{{ x: 350, duration: 1250, delay: 1250 }}"/>
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
      <div class="w-32 h-4 bg-gradient-to-r from-purple-300 to-blue-300 z-0" in:fly="{{ x: 250, duration: 1250, delay: 1250 }}"/>
      <div class="w-12 h-4 bg-surface-300 z-0" in:fly="{{ x: 350, duration: 1250, delay: 1250 }}"/>
      <div class="w-48 h-4 bg-gradient-to-r from-primary-500 to-sky-500 z-0" in:fly="{{ x: 450, duration: 1250, delay: 1250 }}"/>
    </div>
    <div class="flex space-x-4">
      <div class="w-52 h-4 bg-gradient-to-r from-amber-400 to-red-400 z-0" in:fly="{{ x: 250, duration: 1250, delay: 1250 }}"/>
      <div class="w-12 h-4 bg-surface-300 z-0" in:fly="{{ x: 350, duration: 1250, delay: 1250 }}"/>
      <div class="w-24 h-4 bg-gradient-to-r from-purple-300 to-blue-300 z-0" in:fly="{{ x: 450, duration: 1250, delay: 1250 }}"/>
      <div class="w-4 h-4 rounded-full bg-surface-300 z-0" in:fly="{{ x: 550, duration: 1250, delay: 1250 }}"/>
    </div>
    <div/>
    <div class="flex space-x-4">
      <div class="w-16 h-4 bg-gradient-to-r from-primary-500 to-sky-500 z-0" in:fly="{{ x: 250, duration: 1250, delay: 1250 }}"/>
      <div class="w-12 h-4 bg-surface-300 z-0" in:fly="{{ x: 350, duration: 1250, delay: 1250 }}"/>
    </div>
    <div class="flex space-x-4">
      <div class="w-52 h-4 bg-gradient-to-r from-primary-500 to-sky-500 z-0" in:fly="{{ x: 250, duration: 1250, delay: 1250 }}"/>
    </div>
    <div class="flex space-x-4">
      <div class="w-40 h-4 bg-gradient-to-r from-purple-300 to-blue-300 z-0" in:fly="{{ x: 250, duration: 1250, delay: 1250 }}"/>
      <div class="w-16 h-4 bg-surface-300 z-0" in:fly="{{ x: 350, duration: 1250, delay: 1250 }}"/>
      <div class="w-24 h-4 bg-gradient-to-r from-amber-400 to-red-400 z-0" in:fly="{{ x: 450, duration: 1250, delay: 1250 }}"/>
    </div>
  {/if}
</div>
