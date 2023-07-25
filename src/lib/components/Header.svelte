<!-- Header component -->
<script>
  export let name = 'Brian Liu';
  export let links = [
    { name: 'About' },
    { name: 'Projects' },
    { name: 'GitHub' },
    { name: 'LinkedIn' }
  ];
</script>

<header>
  <div class="flex flex-row justify-between items-center">
    <h1 class="">{name}</h1>
    <div class="flex flex-row justify-between items-center">
      {#each links as link}
        <a href="#" class="text-xl font-bold mr-4">{link.name}</a>
      {/each}
    </div>
  </div>
</header>

