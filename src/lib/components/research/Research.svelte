<script>
  import AnimatedSection from "../AnimatedSection.svelte";
  import Highlight from "../Highlight.svelte";
  import { researchInfo } from "./researchinfo";
</script>

<AnimatedSection decoration="mt-28 w-16 h-4 bg-gradient-to-r from-amber-400 to-red-400" title="Research" id="Research">
  <div class="mt-8 flex flex-col space-y-56">
    {#each researchInfo as p, i }
      <Highlight name={p.name} images={p.images} description={p.description} skills={p.skills} github={p.github} reverse={i % 2 == 1}/>
    {/each}
  </div>
  <div class="m-32 lg:mx-52"/>
</AnimatedSection>