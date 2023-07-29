<script>
	import { Avatar } from "@skeletonlabs/skeleton";

  export let title = "Welcome, my name is Brian.";
  // export let subtitle = "I'm a visiting student at the University of Oxford and interested in technology for human good.";
  export let subtitle = "Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder";
  export let imageSrc = "https://via.placeholder.com/150";
</script>

<div class="bg-primary-50-900-token">
  <div class="flex items-center">
    <div class="flex-1 mx-2">
      <h1 class="h2 mb-4">{title}</h1>
      <h2 class="h4">{subtitle}</h2>
    </div>
    <div class="mx-2">
      <Avatar src={imageSrc} width="w-48" rounded="rounded-3xl"/>
    </div>
  </div>
</div>
