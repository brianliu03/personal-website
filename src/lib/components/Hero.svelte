<script>
	import { Avatar } from "@skeletonlabs/skeleton";

  export let title = "Welcome, my name is Brian.";
  export let subtitle = "I am a visiting student at the University of Oxford and I believe in technology for the human good.";
  export let imageSrc = "https://via.placeholder.com/150";
</script>

<div class="flex items-center mx-20 space-x-20 h-screen">
  <div class="flex-1">
    <h1 class="h2 mb-4">{title}</h1>
    <h2 class="h4">{subtitle}</h2>
  </div>
    <Avatar src={imageSrc} width="w-48" rounded="rounded-3xl"/>
    <!-- make component extend to fill up one page -->
</div>
