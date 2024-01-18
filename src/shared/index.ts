import { Task, TasksController } from './Task'
import { User  } from './User'
import { Ship } from './Ship'
import { Frame } from './Frame'

export { Frame, Task, TasksController, User, Ship }

export const entities = [Frame, Task, User, Ship]
export const controllers = [TasksController]
