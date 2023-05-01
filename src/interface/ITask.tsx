export interface ITask {
  id: string;
  content: string;
  done: boolean;
  createdAt?: Date;
  doneDate?: Date;
}
