<script lang="ts">
	import { onMount } from 'svelte';
  import { fade, fly } from 'svelte/transition';
  import type { PageData } from './$types';
  
  export let title = "Crossroads of a Crisis: Housing in San Francisco";
  export let imgGroup = "/images/groupsf.JPG";
  export let about = "Over the course of Summer and Fall 2022, my friend and I were sponsored by the McKeen Center in Bowdoin to create a holistic, seminar-based learning experience on the housing crisis next Spring. We brought on ten other students, held seven weekly seminars, and traveled to San Francisco for a week to work with community partners supporting unhoused people. You can view some of our material used here:";
  export let refLessonPlan = "https://drive.google.com/file/d/1PLjTq_dkpDOC80AwlggnveaQC25Tux-_/view?usp=sharing";
  export let titStats = "Eviction Notices and Data Analysis";
  export let gifEvictions = "/images/evictionsf.gif";
  export let aboutStats = "After the trip, I became interested in exploring eviction data and decided to start a statistics project to help explain historical events and how landlords can play a “game” of eviction strategies based on the housing market. I presented my first analysis and findings in May 2023, and am currently diving deeper into modeling and incorporating financial data.";
  export let refGithub = "https://github.com/brianliu03/sf-evictions";

  let visible = false;

  onMount(() => {
    visible = true
      console.log("Housing page mounted");
  });
</script>

<div class="flex flex-col items-center px-20" id="about">

  <div class="flex flex-col justify-between items-center w-full space-y-20">

    <div class="flex flex-row w-full mt-10 space-x-10">
      <div class="flex flex-col w-1/2">
        <h1 class="h2 font-semibold">{title}</h1>
        <hr class="w-full !border-2 border-primary-500 mt-3">
        <p class="h5 mx-15 my-5">{about}
          <a class="text-primary-500" href={refLessonPlan} target="_blank">
            <h3 class="font-semibold inline-block">Lesson Plan</h3>
          </a>
        </p>
      </div>
      <img src={imgGroup} class="w-1/2 object-scale-down" alt="Avatar" />
    </div>

    <div class="flex flex-row items-center w-full space-x-10">
      <img src={gifEvictions} class="w-1/2 mb-10" alt="Avatar" />
      <div class="flex flex-col items-center w-1/2">
        <h2 class="h3 font-semibold mt-10">{titStats}</h2>
        <p class="h5 mx-15 my-5">{aboutStats}</p>
      </div>
    </div>

    <a class="text-primary-500" href={refGithub} target="_blank">
      <h3 class="h4 font-semibold mb-20">Github Repository</h3>
    </a>

  </div>
</div>