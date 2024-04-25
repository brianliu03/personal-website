import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch }) => {
  const geojsonPath = '/data/evictions.geojson';
  const response = await fetch(geojsonPath);
  const data: GeoJSON.FeatureCollection = await response.json();

  return {
    evictionData: data,
  };
};