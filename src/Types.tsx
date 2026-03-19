export type Task = { id : string, 
  name : string, 
  isCompleted: boolean,
  createdTime : Date
}

export type TodoInteractions = {
    toggle : ((id: string, isCompleted: boolean) => void),
    delete : ((id : string) => void) 
}