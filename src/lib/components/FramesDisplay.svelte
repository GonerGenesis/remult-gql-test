<script lang="ts">
  import { fragment, graphql } from '$houdini'
  import type { FramesInfo } from '$houdini'

  export let ship: FramesInfo

  $: data = fragment(
    ship,
    graphql`
      fragment FramesInfo on Ship {
        id
        frames {
          items @list(name: "All_Frames") {
            id
            framePos
          }
        }
      }
    `,
  )
</script>

<p>All Frames</p>
{#if $data.frames}
  {#each $data.frames.items as frame}
    <p>{frame.framePos}</p>
  {/each}
{:else}
  <p>loading</p>
{/if}
