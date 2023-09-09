<script lang="ts">
  import AnimatedSection from "../AnimatedSection.svelte";
  import { timelineItems } from "./timelineItems";
  import Timeline from "./Timeline.svelte";
  import { onMount } from "svelte";

  onMount(() => {
    console.log("Experience mounted");
  });
</script>

<AnimatedSection decoration="w-16 h-4 bg-gradient-to-r from-primary-500 to-sky-500" title="Experience" id="Experience">
  <div class="mt-5" />
  <Timeline items={timelineItems}/>
</AnimatedSection>