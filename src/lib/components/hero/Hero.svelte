<script lang="ts">
  import { fade, fly } from "svelte/transition";
  import { onMount } from "svelte";
  import type { FlyParams } from "svelte/transition";

  export let welcome = "Welcome, my name is";
  export let name = "Brian Liu";
  export let sub = "I combine data, research, and design to solve complex world issues.";
  export let about =
    "I'm currently traveling the world as a <a class='text-primary-500' href='https://watson.foundation/fellowships/tj/fellows/a0CRn00002BRZ3LMAX' target='_blank' rel='noopener noreferrer'>Thomas J. Watson Fellow</a>, exploring how music and technology can empower creativity, community, and self-expression. My work draws from computer science and mathematics, but it's driven by a broader aim: to understand human stories through both data and lived experience. Whether visualizing housing inequity or developing tools for artistic expression, I seek to blend technical insight with social impact.";

  let visible = false;
  let floating = false;
  function startFloat() {
    floating = true;
    // Stop floating after 6 seconds
    setTimeout(() => {
      floating = false;
    }, 6000);
  }

  const topRectangleRows = [
    [
      { width: "w-52", color: "bg-gradient-to-r from-primary-500 to-sky-500", x: 250 },
      { width: "w-4", color: "bg-surface-300 rounded-full", x: 350 },
    ],
    [
      { width: "w-36", color: "bg-gradient-to-r from-purple-300 to-blue-300", x: 250 },
      { width: "w-12", color: "bg-surface-300", x: 350 },
    ],
    [
      { width: "w-56", color: "bg-gradient-to-r from-primary-500 to-sky-500", x: 250 },
      { width: "w-12", color: "bg-surface-300", x: 350 },
      { width: "w-28", color: "bg-gradient-to-r from-purple-300 to-blue-300", x: 450 },
    ],
    [
      { width: "w-48", color: "bg-gradient-to-r from-purple-300 to-blue-300", x: 250 },
      { width: "w-20", color: "bg-surface-300", x: 350 },
      { width: "w-4", color: "bg-surface-300", x: 450 },
      { width: "w-24", color: "bg-gradient-to-r from-amber-400 to-red-400", x: 550 },
      { width: "w-12", color: "bg-surface-300", x: 650 },
    ],
    [
      { width: "w-0", color: "bg-transparent", x: 0 },
    ],
    [
      { width: "w-4 ml-16", color: "bg-surface-300", x: 250 },
      { width: "w-32", color: "bg-gradient-to-r from-primary-500 to-sky-500", x: 350 },
    ],
  ];

  const bottomRectangleRows = [
    [
      { width: "w-32", color: "bg-gradient-to-r from-purple-300 to-blue-300", x: 250 },
      { width: "w-12", color: "bg-surface-300", x: 350 },
      { width: "w-48", color: "bg-gradient-to-r from-primary-500 to-sky-500", x: 450 },
    ],
    [
      { width: "w-52", color: "bg-gradient-to-r from-amber-400 to-red-400", x: 250 },
      { width: "w-12", color: "bg-surface-300", x: 350 },
      { width: "w-24", color: "bg-gradient-to-r from-purple-300 to-blue-300", x: 450 },
      { width: "w-4", color: "bg-surface-300 rounded-full", x: 550 },
    ],
    [
      { width: "w-0", color: "bg-transparent", x: 0 },
    ],
    [
      { width: "w-16", color: "bg-gradient-to-r from-primary-500 to-sky-500", x: 250 },
      { width: "w-12", color: "bg-surface-300", x: 350 },
    ],
    [{ width: "w-52", color: "bg-gradient-to-r from-primary-500 to-sky-500", x: 250 }],
    [
      { width: "w-40", color: "bg-gradient-to-r from-purple-300 to-blue-300", x: 250 },
      { width: "w-16", color: "bg-surface-300", x: 350 },
      { width: "w-24", color: "bg-gradient-to-r from-amber-400 to-red-400", x: 450 },
    ],
  ];

  function flyParams(x: number, delay = 1250): FlyParams {
    return { x, duration: 1250, delay };
  }

  function goToExperience() {
    const experienceSection = document.getElementById("Experience");
    if (experienceSection) {
      experienceSection.scrollIntoView({ behavior: "smooth" });
    }
  }

  onMount(() => {
    visible = true;
  });
</script>

<div class="flex min-h-screen flex-col md:flex-row justify-between m-3 md:m-32 space-y-3 md:space-y-0 md:space-x-12 scale-75 md:scale-90 lg:scale-100">
  <div class="flex flex-col space-y-3 md:w-1/2">
    {#if visible}
      {#each topRectangleRows as row}
        <div class="flex space-x-4">
          {#each row as { width, color, x }}
            <div class={`h-4 ${width} ${color} z-0`} in:fly|global={flyParams(x)} />
          {/each}
        </div>
      {/each}
      <h2 class="h3 lg:h2 pt-2 px-6 z-0 text-surface-300" in:fly={{ y: 20, duration: 500 }}>
        {welcome}
      </h2>
      <h1 class="h2 lg:h1 px-6 font-semibold z-0 text-secondary-400" in:fly={{ y: 20, duration: 500 }}>
        {name}
      </h1>
      <h3 class="h4 md:h3 px-6 z-0" in:fly={{ y: 250, duration: 1000, delay: 500 }}>
        {sub}
      </h3>
      <div class="flex py-2 px-6 space-x-6">
        <a href="https://www.youtube.com/channel/your-channel-id" target="_blank" rel="noopener noreferrer">
          <i class="fa-brands fa-youtube text-xl text-surface-50" in:fly={{ y: 250, duration: 1000, delay: 750 }}></i>
        </a>
        <a href="https://github.com/your-github-username" target="_blank" rel="noopener noreferrer">
          <i class="fa-brands fa-github text-xl text-surface-50" in:fly={{ y: 250, duration: 1000, delay: 750 }}></i>
        </a>
        <a href="https://www.linkedin.com/in/your-linkedin-id" target="_blank" rel="noopener noreferrer">
          <i class="fa-brands fa-linkedin text-xl text-surface-50" in:fly={{ y: 250, duration: 1000, delay: 750 }}></i>
        </a>
        <a href="mailto:your-email@example.com">
          <i class="fa-solid fa-envelope text-xl text-surface-50" in:fly={{ y: 250, duration: 1000, delay: 750 }}></i>
        </a>
      </div>
      {#each bottomRectangleRows as row}
        <div class="flex space-x-4">
          {#each row as { width, color, x }}
            <div class={`h-4 ${width} ${color} z-0`} in:fly|global={flyParams(x)} />
          {/each}
        </div>
      {/each}
    {/if}
  </div>
  {#if visible}
    <div class="flex flex-col md:w-1/2 px-4 md:px-0 py-40 justify-center h-full">
      <p
        on:introend={startFloat}
        class:float={floating}
        class="text-surface-100 text-sm md:text-lg lg:text-xl leading-relaxed"
        in:fly={{ y: 250, duration: 1000, delay: 2000 }}
      >
        {@html about}
      </p>
    </div>
  {/if}
</div>

<style>
  @keyframes float {
    0% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
    100% { transform: translateY(0); }
  }
  .float {
    animation: float 2s linear infinite;
  }
</style>