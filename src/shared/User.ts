import { Entity, Fields, Relations } from 'remult'
import { Ship } from './Ship'

@Entity('users', {
  allowApiCrud: true,
})
export class User {
  @Fields.cuid()
  id!: string

  @Fields.string<User>({
    validate: task => {
      if (task.name.length < 3) throw 'The title must be at least 3 characters long'
    },
  })
  name: string = ''

  @Fields.createdAt()
  createdAt?: Date

  @Relations.toMany(() => Ship, { field: 'author_id', })
  ships?: Ship[]
}
