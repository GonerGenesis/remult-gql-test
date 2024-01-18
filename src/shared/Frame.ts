import { Entity, Fields, Relations } from 'remult'
import { Ship } from './Ship'

@Entity('frames', {
    allowApiCrud: true,
})
export class Frame {
    @Fields.cuid()
    id!: string

    @Fields.number()
    framePos!: number

    @Fields.createdAt()
    createdAt?: Date

    @Fields.string()
    ship_id!: string

    @Relations.toOne(() => Ship, { field: 'ship_id' })
    ship!: Ship
}