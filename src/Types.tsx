export type Task = { id : string, 
  name : string, 
  isCompleted: boolean,
  createdTime : Date
}

export interface SubmitProps {
    onSubmit : ((value: string) => void)
}

export interface TodosProps {
    list : Task[]
}