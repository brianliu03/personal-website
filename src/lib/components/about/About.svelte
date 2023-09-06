<script lang="ts">
  import AnimatedSection from "../AnimatedSection.svelte";
  export let imgMe = "/images/portrait.jpg";
</script>

<AnimatedSection decoration="w-16 h-4 bg-gradient-to-r from-purple-300 to-blue-300" title="About Me" id="About">
  <div class="flex flex-col-reverse lg:flex-row">
    <p class="pt-5 h4 text-secondary-100 lg:w-7/12 lg:pr-16 lg:h3">
      Hello! I'm a visiting student at the University of Oxford and a student at Bowdoin College. My interests include computer science, mathematics, finance, and music.
      <br /> <br />
      I am interested in utilizing technology for human good, addressing pressing humanitarian issues, and creating empowering software for all. I find fulfillment not only in the development process, but also in the human connections and communication that exist around it.
      <br /> <br />
      Off computers, piano and music are sources of joy for me, and I am challenging myself to prepare for at least one international competition. I also love running and mountain biking to explore outdoors.
    </p>
    <img src={imgMe} class="flex h-1/4 flex-row justify-center w-2/3 lg:w-5/12 my-9 max-w-md self-center rounded-full" alt="Avatar" />
</AnimatedSection>