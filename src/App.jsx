import { createEffect } from "solid-js";

import { createAsync } from "@solidjs/router";

import { getGlobals } from "/src/libs/directus.js";

export const route = {
  load: () => getGlobals(),
};

export default function Home() {
  return (
    <main>
      <Show>{(info) => <h1>{info().name}</h1>}</Show>
      <Show>{(info) => <strong>{info().description}</strong>}</Show>
      LOADING
    </main>
  );
}
