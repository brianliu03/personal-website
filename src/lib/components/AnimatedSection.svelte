<script lang="ts">
  import { fly } from "svelte/transition";
  import { inview, type Options } from "svelte-inview";

  export let decoration: string;
  export let title: string;
  export let id: string;
  
  let visible = false;
  const options: Options = {
    rootMargin: "-15%",
    unobserveOnEnter: true,
  };

  const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>) => {
    visible = detail.inView;
  };
</script>

<div class="flex items-center justify-center align-middle min-h-screen" id={id} use:inview={ options } on:inview_change={ handleChange }>
  <div class="flex flex-col w-full md:w-2/3 min-h-screen items-center justify-center scale-75 md:scale-90 lg:scale-100">
    {#if visible}
      <div class="flex w-full items-baseline space-x-4">
        <div class={decoration} in:fly|global="{{ x: 250, duration: 1000 }}"/>
        <h1 class="h2 lg:h1 font-semibold ml-12 z-0 text-secondary-400" in:fly|global="{{ x: 500, duration: 1000 }}">{title}</h1>
      </div>
      <div class="flex flex-col w-full" in:fly|global="{{ y: 400, duration: 500, delay: 500 }}">
        <slot />
      </div>
    {/if}
  </div>
</div>
