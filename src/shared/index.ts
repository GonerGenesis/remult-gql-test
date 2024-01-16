import { Task, TasksController } from './Task'
import { User  } from './User'
import { Ship } from './Ship'

export { Task, TasksController, User, Ship }

export const entities = [Task, User, Ship]
export const controllers = [TasksController]
