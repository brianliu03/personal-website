<script lang="ts">
  export let name: string;
  export let description: string;
  export let skills: string[];
  export let images: string[];
  export let github: string;
  export let reverse: boolean;
</script>

<div class="flex {reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'}">
  <div class="flex flex-col items-center justify-center">
    {#each images as image}
      <div class="flex flex-row">
        <img src={image} class="h-auto w-auto bg-white rounded-lg my-2" alt="Work" />
      </div>
    {/each}
  </div>
  <div class="flex flex-col space-y-4 lg:w-1/2 justify-center {reverse ? 'text-right lg:mr-16' : 'text-left lg:ml-16'} pt-8 lg:pt-28">
    <p class="text-2xl font-semibold text-accent-color lg:text-4xl">{name}</p>
    <p class="text-sm lg:text-lg">{description}</p>
    <div class="flex flex-row {reverse ? 'justify-end' : 'justify-start'}">
      {#each skills as skill}
        <p class="whitespace-nowrap badge variant-filled rounded-full px-3 py-1 {reverse ? 'ml-4' : 'mr-4'}">
          {skill}
        </p>
      {/each}
    </div>
    <div class="flex flex-row {reverse ? 'justify-end' : 'justify-start'} space-x-6 pt-2">
      <a href={github} target="_blank" rel="noopener noreferrer" class="cursor-pointer transition duration-300">
        <i class="fa-brands fa-github text-lg" />
      </a>
    </div>
  </div>
</div>
