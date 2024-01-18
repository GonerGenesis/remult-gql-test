<script lang="ts">
  import { graphql } from '$houdini'
  import { remult } from 'remult'
  import { onDestroy, onMount } from 'svelte'
  import { Task, TasksController } from '../shared'
  import type { PageData } from './$houdini'
    import ShipInfoCard from '$lib/components/ShipInfoCard.svelte'
    import { Button, Input, Label, Modal, Popover, Select } from 'flowbite-svelte'

  export let data: PageData

  let formModal = false
  let selectedModelType: any

  const deleteShip = graphql(`
    mutation DeleteShip($shipId: ID!) {
      deleteShip(id: $shipId) {
        id @Ship_delete
      }
    }
  `)

  $: ({ GetShips } = data)
</script>

<div class="flex items-center justify-center">
  <div class="flex flex-col items-center">
    {#each $GetShips.data?.user?.ships?.items ?? [] as ship}
      <ShipInfoCard {ship} />
      <Popover
        triggeredBy="[id^='ship-']"
        placement="right"
        class="w-64 text-sm font-light "
        title="Context"
      >
        <Button on:click={() => deleteShip.mutate({ shipId: ship.id })} size="xs">
          Delete Ship
        </Button>
      </Popover>
    {/each}
    <Button on:click={() => (formModal = true)}>Add new Ship</Button>

    <Modal bind:open={formModal} size="xs" autoclose={false} class="w-full">
      <form method="post" class="flex flex-col space-y-6" action="#">
        <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">Add a new ship</h3>
        <Label class="space-y-2">
          <span>Title</span>
          <Input type="text" name="title" placeholder="MyShip" required />
        </Label>
        <Label class="space-y-2">
          <span>LPP</span>
          <Input type="number" name="lpp" required />
        </Label>
        <Button type="submit" class="w-full1">Add Ship</Button>
      </form>
    </Modal>
  </div>
</div>
