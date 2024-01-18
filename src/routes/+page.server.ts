import { graphql } from '$houdini'
import { fail } from '@sveltejs/kit'
import type { Actions } from './$types'

export const actions: Actions = {
    default: async (event) => {
        const data = await event.request.formData()

        const inputEntries: { [key: string]: any } = {}

        for (const pair of data.entries()) {
            if (pair[1] != '') {
                let val;
                (pair[0] === 'lpp') ? val = parseFloat(pair[1].toString()) : val = pair[1].toString();
                inputEntries[pair[0]] = val;
            }
        }

        const name = data.get('title')?.toString()


        if (!name) {
            return fail(403, { name: '*' })
        }

        const createShip = graphql(`
    mutation CreateShip(
      $lpp: Float = 50
      $author_id: String = "u3xaxys7wdmnbymnl2cv2tlq"
      $title: String
    ) {
      createShip(
        input: {
          author_id: $author_id
          lpp: $lpp
          title: $title
        }
      ) {
        ship {
          id
          title
        }
      }
    }
  `)


        return await createShip.mutate(inputEntries, { event })
    }
}