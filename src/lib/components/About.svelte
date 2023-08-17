<script>
  export let title = "About me";
  export let intro = "Hello! I'm a student interested in utilizing technology for human good, addressing pressing humanitarian issues, and creating empowering software for all. Outside work, the current housing and climate crises have captured my attention, and I am exploring statistical and computational models to not only chronicle historical events, but also to help uncover potential root causes and solutions. Presently, I am currently looking for software and data roles for the summer of 2024.";
  export let titCuriousity = "Curiosity and Exploring Data";
  export let subCuriousity = "My fascination with data-driven insights led me to play with models and analyze intricate datasets. I recently delved into a research project focused on studying evictions in San Francisco and their correlation with financial data. Unraveling meaningful patterns and uncovering hidden truths from the numbers was both challenging and deeply rewarding.";
  export let titDesign = "Design, Build, and Test";
  export let subDesign = "During my internship, I had the opportunity to create a full-stack chat application for an airline, a project that allowed me to blend my technical skills with a genuine desire to improve user experiences. This experience ignited my passion for building applications that directly impact people's lives positively.";
  export let titConnect = "Communication and Connections";
  export let subConnect = "I find immense fulfillment in fostering human connections and prioritizing effective communication. As an algorithms learning assistant during my time at Bowdoin College, I not only enjoyed helping others navigate the intricacies of the subject but also cherished the shared sense of growth and understanding.";
  export let titExtra = "Away from Computers";
  export let subExtra = "My lifelong commitment to piano and music has been a source of creativity and joy. I've had the privilege of performing and receiving top prizes in competitions, and I continue to dedicate time everyday for music. As a challenge, I am preparing repertoire for international competitions. I also love the outdoors, and running and mountain biking are two ways I explore nearby mountains and forests.";
  export let bye = "Thank you for stopping by, feel free to connect with me!";
</script>

<div class="flex flex-col items-center px-20 bg-secondary-300 text-surface-700" id="about">
  <div class="flex flex-col items-center w-full">
    <h1 class="h2 font-semibold mt-20">{title}</h1>
    <hr class="w-3/4 !border-2 border-primary-500 mt-3">
  </div>
  <p class="h5 mx-15 my-5">{intro}</p>
  <div class="flex flex-row justify-between w-full"> <!-- Use justify-between for even spacing -->
    <div class="flex flex-col items-center w-1/2">
      <h2 class="h3 font-semibold mt-10">{titCuriousity}</h2>
      <p class="h5 mx-15 my-5">{subCuriousity}</p>
    </div>
    <div class="flex flex-col items-center w-1/2">
      <h2 class="h3 font-semibold mt-10">{titDesign}</h2>
      <p class="h5 mx-15 my-5">{subDesign}</p>
    </div>
  </div>
  <div class="flex flex-row justify-between w-full"> <!-- Use justify-between for even spacing -->
    <div class="flex flex-col items-center w-1/2">
      <h2 class="h3 font-semibold mt-10">{titConnect}</h2>
      <p class="h5 mx-15 my-5">{subConnect}</p>
    </div>
    <div class="flex flex-col items-center w-1/2">
      <h2 class="h3 font-semibold mt-10">{titExtra}</h2>
      <p class="h5 mx-15 my-5">{subExtra}</p>
    </div>
  </div>
  <p class="h5 mx-15 my-5">{bye}</p>
</div>



