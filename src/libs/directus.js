import { createDirectus, readItem, readItems, rest } from "@directus/sdk";
import { cache } from "@solidjs/router";

export const directus = createDirectus(
  import.meta.env.VITE_YOUR_DIRECTUS_PROJECT_URL
).with(rest());

export const getGlobals = cache(async () => {
  "use server";
  try {
    return await directus.request.readItems("Articles");
  } catch (e) {
    console.error(e);
    return null;
  }
}, "globals");
