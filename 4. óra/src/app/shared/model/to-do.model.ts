export class ToDo {
  constructor(public id: number, public toDoListId: number, public description: string, public isCompleted = false) {}
}
