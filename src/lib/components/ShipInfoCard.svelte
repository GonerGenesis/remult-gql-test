<script lang="ts">
    import { fragment, graphql, type ShipInfo } from '$houdini'
    import { Card } from 'flowbite-svelte'
  
    export let ship: ShipInfo
  
    $: data = fragment(
      ship,
      graphql(`
        fragment ShipInfo on Ship {
          lpp
          title
          id
        }
      `),
    )
  </script>
  
  <Card id="ship-{$data.id}" href="/{$data.id}">
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      {$data.title}
    </h5>
    <p class="font-normal text-gray-700 dark:text-gray-400 leading-tight">{$data.lpp} m</p>
    <!-- <p class="font-normal text-gray-700 dark:text-gray-400 leading-tight">
      {ship.model_type.caption}
    </p> -->
  </Card>