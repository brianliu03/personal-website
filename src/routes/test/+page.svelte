<script lang="ts">
  import { onMount } from 'svelte';
  import type { PageData } from './$types';
  import { MapLibre, Marker, Popup } from 'svelte-maplibre';

  export let data: PageData; // Your GeoJSON data

  let markers: any[] = [];

  onMount(() => {
    // Assuming `data` is your GeoJSON object
    if (data && data.evictionData) {
      markers = data.evictionData.features.map(feature => {
        if (feature.geometry.type === 'Point') {
          const [lng, lat] = feature.geometry.coordinates;
          return {
            lngLat: { lng, lat },
            label: feature.properties?.label, // Adjust according to your GeoJSON structure
            name: feature.properties?.name // Adjust according to your GeoJSON structure
          };
        }
      });
    }
  });
</script>

<MapLibre
  center={[-122.436, 37.7645]}
  zoom={11}
  class="map"
  standardControls
  style="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json"
  >

  {#each markers as { lngLat, label, name } (name)}
    <Marker
      {lngLat}
      on:click={() => console.log(`Clicked on ${name}`)}
      class="grid h-8 w-8 place-items-center rounded-full border border-gray-200 bg-red-300 text-black shadow-2xl focus:outline-2 focus:outline-black"
      >
      <span>{label}</span>
      <Popup openOn="hover" offset={[0, -10]}>
        <div class="text-lg font-bold">{name}</div>
      </Popup>
    </Marker>
  {/each}
</MapLibre>

<style>
  .map {
    height: 100vh;
  }
</style>