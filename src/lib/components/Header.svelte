<script>
  import { onMount } from "svelte";

  /**
	 * @type {any}
	 */
   export let number;
  /**
	 * @type {any}
	 */
   export let text;

  let reveal = false;
  /**
	 * @type {any}
	 */
  let reference;
</script>

<div class="flex flex-row" bind:this={reference}>
  <div class="w-fit">
    <p class={`mr-2 text-xl text-lighter-primary-color transition duration-700 lg:text-2xl ${reveal ? "opacity-100" : "opacity-0"} t`}>{number}</p>
    <p class={`mt-1 flex flex-col whitespace-nowrap text-4xl font-semibold transition duration-700 lg:text-5xl ${reveal ? "opacity-100" : "opacity-0"} text-accent-color`}>{text}</p>
  </div>
  <div class="flex w-full flex-col">
    <div class="h-1/2"></div>
    <hr class={`ml-3 mt-[1.1rem] border-lighter-primary-color transition-all duration-700 lg:ml-5 lg:mt-[1.3rem] ${reveal ? "w-3/4 lg:w-1/4" : "w-0"}`} />
  </div>
</div>