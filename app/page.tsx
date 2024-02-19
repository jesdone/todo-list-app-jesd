import Form from "./components/form";
import FilterButton from "./components/FilterButton";
import Todo from "./components/task";
import {
  Key,
  PromiseLikeOfReactNode,
  ReactElement,
  JSXElementConstructor,
  ReactNode,
} from "react";
import { ReactDOM } from "react";

const DATA = [
  { id: "todo-0", name: "Eat", completed: true },
  { id: "todo-1", name: "Sleep", completed: false },
  { id: "todo-2", name: "Repeat", completed: false },
];

function App(props: { tasks: any[] }) {
  const taskList = props.tasks?.map(
    (task: {
      id: Key | null | undefined;
      name:
        | string
        | number
        | boolean
        | PromiseLikeOfReactNode
        | ReactElement<any, string | JSXElementConstructor<any>>
        | Iterable<ReactNode>
        | null
        | undefined;
      completed: any;
    }) => (
      <Todo
        id={task.id}
        name={task.name}
        completed={task.completed}
        key={task.id}
      />
    )
  );
  return (
    <>
      <App tasks={DATA} />

      <div className="todoapp stack-large">
        <h1>TodoMatic</h1>
        <Form />
        <div className="filters btn-group stack-exception">
          <FilterButton />
          <FilterButton />
          <FilterButton />
        </div>
        <h2 id="list-heading">3 tasks remaining</h2>
        <ul
          role="list"
          className="todo-list stack-large stack-exception"
          aria-labelledby="list-heading"
        >
          {taskList}
        </ul>
      </div>
    </>
  );
}

export default App;
