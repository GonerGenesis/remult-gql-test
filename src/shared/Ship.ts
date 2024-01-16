import { BackendMethod, Entity, Fields, Relations, remult } from 'remult'
import { User } from './User'

@Entity('ships', {
    allowApiCrud: true,
  })
  export class Ship {
    @Fields.cuid()
    id!: string
  
    @Fields.string<Ship>({
      validate: task => {
        if (task.title.length < 3) throw 'The title must be at least 3 characters long'
      },
    })
    title: string = ''
  
    @Fields.createdAt()
    createdAt?: Date

    @Fields.cuid()
	author_id!: string

	@Relations.toOne(() => User, { field: 'author_id' })
	author!: User
  }