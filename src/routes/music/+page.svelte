<script lang="ts">
	import { onMount } from 'svelte';
  import { fade, fly } from 'svelte/transition';
  import type { PageData } from './$types';
  
  export let title = "Music Portfolio";
  export let subtitle = "Away from coding, I spend a majority of my time on piano, studying music, and composing. You can find some of my work here."
  // link https://youtu.be/6auG_V90F2M?si=0AMmkCCxFeAgEGCU
  export let rach3 = "https://www.youtube.com/embed/6auG_V90F2M";
  // link https://youtu.be/xvKixiVmfvw?si=kqJDRAgSM_uSUDtU
  export let cvine = "https://www.youtube.com/embed/xvKixiVmfvw";
  // https://youtu.be/3joarr5u2kg?si=GFotoWzNd6uI4BZr
  export let rachcello = "https://www.youtube.com/embed/3joarr5u2kg";
  // https://youtu.be/__IhWPT8Qck?si=DXZju6SF00BkMEWh
  export let liszt = "https://www.youtube.com/embed/__IhWPT8Qck";
  // https://youtu.be/GElOjxKvlhw?si=JYIZdgl6Ps4XKFr1
  export let haydn = "https://www.youtube.com/embed/GElOjxKvlhw";


  let visible = false;

  onMount(() => {
    visible = true
      console.log("Music page mounted");
  });
</script>

<div class="flex-row">
  <div class="flex flex-col items-center">
    {#if visible}
      <h1 class="h2 mt-10" in:fly="{{ y: 20, duration: 500 }}">
        {title}
      </h1>
    {/if}
    {#if visible}
      <h2 class="h4 mt-10 mx-20" in:fly="{{ y: 250, duration: 1000, delay: 250 }}">
        {subtitle}
      </h2>
    {/if}
    <div class="flex flex-col items-center space-y-10">
      <div class="flex flex-col items-center space-y-2">
        <iframe width="560" height="315" src={rach3} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" in:fly="{{ y: -250, duration: 1000, delay: 500 }}" allowfullscreen></iframe>
        <p class="text-md">Rachmaninoff Piano Concerto No. 3 in D minor, Op. 30</p>
      </div>
      <div class="flex flex-col items-center space-y-2">
        <iframe width="560" height="315" src={cvine} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" in:fly="{{ y: -250, duration: 1000, delay: 500 }}" allowfullscreen></iframe>
        <p class="text-md">Carl Vine - Sonata No. 1 for Piano</p>
      </div>
      <div class="flex flex-col items-center space-y-2">
        <iframe width="560" height="315" src={rachcello} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" in:fly="{{ y: -250, duration: 1000, delay: 500 }}" allowfullscreen></iframe>
        <p class="text-md">Rachmaninoff Cello Sonata in G minor, Op. 19</p>
      </div>
      <div class="flex flex-col items-center space-y-2">
        <iframe width="560" height="315" src={liszt} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" in:fly="{{ y: -250, duration: 1000, delay: 500 }}" allowfullscreen></iframe>
        <p class="text-md">Liszt Hungarian Rhapsody no. 12</p>
      </div>
      <div class="flex flex-col items-center space-y 2">
        <iframe width="560" height="315" src={haydn} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" in:fly="{{ y: -250, duration: 1000, delay: 500 }}" allowfullscreen></iframe>
        <p class="text-md">Haydn - Piano Sonata in C major, Hob. XVI:50</p>
      </div>
    </div>
  </div>
</div>