<script lang="ts">
    import { onMount } from 'svelte';
    import { fade, fly } from 'svelte/transition';
    import type { PageData } from './$types';

    export let title = "FractMuse: Discovering New Compositional Workflows";
    export let subtitle = "Music and mathematics, despite differences in their expressions, are tied together. The concept of scales and compositional techniques are often derived from mathematical transformations, and many mathematicians and musicians are known for intersecting work in the other respective field. With the increase of technology in everything we do, I have become interested in how technology can empower humans in their creative works, and FractMuse showcases my different explorations in algorithmic and machine learning based composition.";
    export let subExplore = "So far, I am exploring self-similar expansions, markov chains, sieve theory, neural networks, and stochastic processes.";
    export let refPoster = "https://drive.google.com/file/d/1sDyDam0oKtqYpLp__ofFcDvPNpnso7Sd/view?usp=sharing";
    export let refGithub = "https://github.com/brianliu03/fractmuse";
</script>

<div class="flex flex-col items-center px-20">

    <div class="flex flex-col justify-between items-center w-full space-y-20">

        <div class="flex flex-row w-full mt-10 space-x-10">
          <div class="flex flex-col w-1/2">
            <h1 class="h2 font-semibold">{title}</h1>
            <hr class="w-full !border-2 border-primary-500 mt-3">
            <p class="h5 mx-15 my-5">{subtitle}
              <a class="text-primary-500" href={refPoster} target="_blank">
                <h3 class="font-semibold mt-5">Progress Poster</h3>
              </a>
            </p>
          </div>
          <!-- <img src={imgGroup} class="w-1/2 object-scale-down" alt="Avatar" /> -->
        </div>
    
        <div class="flex flex-row items-center w-full space-x-10">
          <!-- <img src={gifEvictions} class="w-1/2 mb-10" alt="Avatar" /> -->
          <div class="flex flex-col items-center w-1/2">
            <!-- <h2 class="h3 font-semibold mt-10">{titStats}</h2> -->
            <p class="h5 mx-15 my-5">{subExplore}</p>
          </div>
        </div>
    
        <a class="text-primary-500" href={refGithub} target="_blank">
          <h3 class="h4 font-semibold mb-20">Github Repository</h3>
        </a>

    </div>
</div>