<script lang="ts">
  import { onMount } from "svelte";
  import "./timeline.css";
  import { fade, fly } from "svelte/transition";

  export let items: {
    company: string;
    startDate: string;
    endDate: string;
    title: string;
    description: string;
    img: string;
    skills: string[];
    showBottomLine: boolean;
  }[] = [];

  let visible = false;

  onMount(() => {
    visible = true;
  });
</script>

{#if visible}
  {#each items as item, i}
  <div class="flex flex-row space-x-10">
    <div class="flex flex-col">
      <div id="loading">
        <div class="inner-shadow"/>
        <img src={item.img} alt={item.company} class="inner-shadow" in:fade|global={{ duration: 1000, delay: 1000 * i }} />
        <div class="hold left">
          <div class="fill" in:fade|global={{ duration: 1000, delay: 1000 * i }} />
        </div>
        <div class="hold right">
          <div class="fill" in:fade|global={{ duration: 1000, delay: 1000 * i }} />
        </div>
      </div>
      {#if item.showBottomLine}
      <div class="lineContainer">
        <div class="line mx-auto animate-line" in:fade|global={{ duration: 1000, delay: (1000 * i) + 500 }} />
      </div>
      {/if}
    </div>
    <div class="text-left" in:fly|global="{{ x: 1000, duration: 1000, delay: 1000 * i }}">
      <p class="h2 whitespace-nowrap">
        <span class="text-2xl font-bold text-accent-color">{item.company}</span> <span class="pl-1 text-xl">{item.title}</span>
      </p>
      <p class="h6 whitespace-nowrap py-2">
        {item.startDate} - {item.endDate}
      </p>
      <div class="h4">
        {item.description}
      </div>
      <div class="flex flex-row space-x-2 py-2">
        {#each item.skills as skill}
        <div class="whitespace-nowrap badge variant-filled">
          {skill}
        </div>
        {/each}
      </div>
    </div>
  </div>
  {/each}
{/if}
