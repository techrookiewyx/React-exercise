import TasksProvider from "./141-context-reducer-move";
import AddTaskCombineT from "./141-move-AddTask";
import TaskListCombineT from "./141-move-TaskList";
export default function TaskAppRedConMove() {
  return (
    <TasksProvider>
      <h1>Day off in Kyoto</h1>
      <AddTaskCombineT />
      <TaskListCombineT />
    </TasksProvider>
  );
}
