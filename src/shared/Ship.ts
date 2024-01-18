import { Entity, Fields, Relations } from 'remult'
import { User } from './User'
import { Frame } from './Frame'

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

  @Fields.number()
  lpp!: number

  @Fields.createdAt()
  createdAt?: Date

  @Fields.string()
  author_id!: string

  @Relations.toOne(() => User, { field: 'author_id' })
  author!: User

  @Relations.toMany(() => Frame, { field: 'ship_id', })
  frames?: Frame[]
}