<script>
  import { fade, fly } from "svelte/transition";

  export let titResearch = "Research";
  export let titProjects = "Projects";
  export let intro = "Hello! I'm a student interested in utilizing technology for human good, addressing pressing humanitarian issues, and creating empowering software for all. Outside work, the current housing and climate crises have captured my attention, and I am exploring statistical and computational models to not only chronicle historical events, but also to help uncover potential root causes and solutions.";
  export let titCuriousity = "Curiosity and Exploring Data";
  export let subCuriousity = "My fascination with data-driven insights led me to play with models and analyze intricate datasets. I recently delved into a research project focused on studying evictions in San Francisco and their correlation with financial data. Finding meaningful patterns and hidden truths from the numbers were both challenging and deeply rewarding.";
  export let titDesign = "Design, Build, and Test";
  export let subDesign = "During my internship, I had the opportunity to create a full-stack chat application for an airline, a project that allowed me to blend my technical skills with a genuine desire to improve user experiences. These experiences reflect my desire to build applications that directly impact people's lives positively.";
  export let titConnect = "Communication and Connections";
  export let subConnect = "I find immense fulfillment in fostering human connections and prioritizing effective communication. As an algorithms learning assistant during my time at Bowdoin College, I not only enjoyed helping others navigate the intricacies of the subject but also cherished the shared sense of growth and understanding.";
  export let titExtra = "Away from Computers";
  export let subExtra = "Piano and music are sources of creativity and joy for me, and I dedicate time everyday for music. I am challenging myself to prepare for at least one international competition. I also love the outdoors. Running and mountain biking are two ways I explore nearby mountains and forests.";
  export let bye = "Thank you for stopping by, feel free to connect with me!";

  export let imgAcadia = "/images/acadia.jpg";
  export let imgMtb = "/images/mtb.JPG";
  export let imgSF = "/images/groupsf.JPG";
  export let gifSF = "/images/colored_map_year.gif";
  export let svgHello = "/svg/hello.svg";
  export let svgThink = "/svg/think.svg";
  export let svgDesign = "/svg/design.svg";
  export let svgCollab = "/svg/collab.svg";
</script>

<div class="flex flex-col p-10 gap-10 place-content-center px-20 bg-secondary-300 text-surface-700" id="about">

  <div class="flex flex-col w-full">
      <h1 class="h2 font-semibold">{titResearch}</h1>
      <hr class="w-full !border-2 border-primary-500 mt-3">
  </div>

  <div class="card text-surface-50">
    <header class="card-header grid grid-cols-2 gap-10 bg-primary-50">
      <img src={gifSF} class="w-full" alt="Avatar" />
      <img src={imgSF} class="w-full" alt="Avatar" />
    </header>
    <section class="h2 p-4">Housing SF</section>
    <footer class="card-footer">arst</footer>
  </div>
  <div class="card p-4">Basic</div>

  

  <!-- <div class="flex flex-row items-center w-full">
    <div class="flex flex-col items-center w-2/3">
      <h2 class="h3 font-semibold mt-10">{titCuriousity}</h2>
      <p class="h5 mx-15 my-5">{subCuriousity}</p>
    </div>
    <img src={svgThink} class="w-48 lg:w-1/3" alt="Avatar" />
  </div>

  <div class="flex flex-row items-center w-full">
    <img src={svgDesign} class="w-48 lg:w-1/3 mr-5" alt="Avatar" />
    <div class="flex flex-col items-center w-2/3">
      <h2 class="h3 font-semibold mt-10">{titDesign}</h2>
      <p class="h5 mx-15 my-5">{subDesign}</p>
    </div>
  </div>

  <div class="flex flex-row items-center w-full">
    <div class="flex flex-col items-center w-2/3">
      <h2 class="h3 font-semibold mt-10">{titConnect}</h2>
      <p class="h5 mx-15 my-5">{subConnect}</p>
    </div>
    <img src={svgCollab} class="w-48 lg:w-1/3" alt="Avatar" />
  </div>

  <div class="flex flex-row items-center w-full">
    <img src={imgMtb} class="w-48 lg:w-1/3 mr-5" alt="Avatar" />
    <div class="flex flex-col items-center w-2/3">
      <h2 class="h3 font-semibold mt-10">{titExtra}</h2>
      <p class="h5 mx-15 my-5">{subExtra}</p>
    </div>
  </div>

  <p class="h5 mx-15 my-5 mt-20 mb-5">{bye}</p> -->
</div>



