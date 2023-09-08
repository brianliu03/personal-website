<script>
  import AnimatedSection from "../AnimatedSection.svelte";
  import Highlight from "../Highlight.svelte";
  import { projectInfo } from "./projectinfo";
</script>

<AnimatedSection decoration="w-16 h-4 bg-gradient-to-r from-purple-300 to-blue-300" title="Projects" id="Projects">
  <div class="mt-28 flex flex-col space-y-56">
    {#each projectInfo as p, i }
      <Highlight name={p.name} images={p.images} description={p.description} skills={p.skills} github={p.github} reverse={i % 2 == 1}/>
    {/each}
  </div>
</AnimatedSection>