<script lang="ts">
  import FramesDisplay from '$lib/components/FramesDisplay.svelte'
  import type { PageData } from './$houdini'

  export let data: PageData

  $: ({ GetFramesBaseInfo } = data)
</script>

{#if $GetFramesBaseInfo.data?.ship}
  <FramesDisplay ship={$GetFramesBaseInfo.data?.ship} />
{:else}
  <p>loading</p>
{/if}
