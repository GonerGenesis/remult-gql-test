<script lang="ts">
  import { route } from '$lib/ROUTES'
  import '../app.pcss'
</script>

<svelte:head>
  <title>KitQL Remult</title>
</svelte:head>


<h1>KitQL &amp; Remult</h1>

<hr />

<slot />

<hr />

<ul>
  <li>
    <a href={route('github_remult')} target="_blank">⭐️ Remult</a>
  </li>
  <li>
    <a href={route('github_kitql')} target="_blank">⭐️ KitQL</a>
  </li>
  <li>
    <a href={route('twitter_jycouet')} target="_blank">Twitter</a>
  </li>
</ul>
