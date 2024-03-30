import { A, createAsync } from "@solidjs/router";
import { For, Show, createEffect } from "solid-js";

const fetch_articles = async () => {
  const requestOptions: RequestInit = {
    method: "GET",
    redirect: "follow",
  };

  const articles = await fetch(
    "https://directus.newsitnowcms.orb.local/items/Articles",
    requestOptions
  )
    .then((response) => response.json())
    .catch((error) => console.log("error", error));

  console.log({ articles });
  return articles;
};

export const route = {
  load: () => fetch_articles,
};

export default function PostsList() {
  const list = createAsync(fetch_articles);

  createEffect(() => {
    console.log({ list: list() });
  });

  return (
    <Show when={list()}>
      {(data) => (
        <ul>
          {JSON.stringify(data().data)}
          <For each={data().data}>
            {(post) => (
              <li>
                {JSON.stringify(post)}
                <h2>{post.id}</h2>

                <span>
                  {post.user_created} &bull; {post.collection_id}
                </span>
              </li>
            )}
          </For>
        </ul>
      )}
    </Show>
  );
}
