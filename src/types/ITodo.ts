type TTodoStatus = "To do" | "In Proggress" | "Done";

export default interface ITodo {
  userId: number;
  id: number;
  title: string;
  completed: TTodoStatus;
  name: string;
  color: string;
}
