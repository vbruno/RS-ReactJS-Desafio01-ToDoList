import style from "./App.module.css";

import { PlusCircle } from "@phosphor-icons/react";
import { ChangeEvent, useState } from "react";
import { v4 as uuidV4 } from "uuid";
import clipboard from "./assets/Clipboard.png";
import logo from "./assets/Logo.png";
import { Task } from "./components/Task";

import { ITask } from "./interface/ITask";

export function App() {
  const [inputTask, setInputTask] = useState("");
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [numberTasksDone, setNumberTasksDone] = useState<number>(0);
  const [numberTasks, setNumberTasks] = useState<number>(0);

  function handleNewTextInputChange(event: ChangeEvent<HTMLInputElement>) {
    setInputTask(event.target.value);
  }

  function handleCreateNewTask(contentTask: string) {
    if (contentTask.trim().length == 0) return;

    const isTaskNew = tasks.find((task: any) => {
      return task.content === contentTask;
    });

    if (!isTaskNew) {
      const newTask: ITask = {
        id: uuidV4(),
        content: contentTask,
        done: false,
      };

      setTasks((prevTasks) => [...prevTasks, newTask]);

      setInputTask("");

      setNumberTasks((prev) => prev + 1);
    }
  }

  function handleCompleteTask(taskComplete: ITask) {
    const findIndexTaskToggle = tasks.findIndex((task) => {
      return task.id === taskComplete.id;
    });

    tasks[findIndexTaskToggle].done = !tasks[findIndexTaskToggle].done;
    setTasks(tasks);
    setNumberTasksDone((prev) =>
      tasks[findIndexTaskToggle].done ? prev + 1 : prev - 1
    );
  }

  function handleDeleteTask(taskDeleted: ITask) {
    setNumberTasks((prev) => prev - 1);

    setNumberTasksDone((prev) => (taskDeleted.done === true ? prev - 1 : prev));

    const updateTasks = tasks.filter((task) => {
      return task.id !== taskDeleted.id;
    });

    setTasks([...updateTasks]);
  }

  return (
    <div className={style.app}>
      <header>
        <img src={logo} alt="logo" />
      </header>
      <main>
        <section className={style.newTask}>
          <input
            type="text"
            name="task"
            id="idInputTask"
            placeholder="Adicione uma nova tarefa"
            value={inputTask}
            onChange={handleNewTextInputChange}
          />
          <button onClick={() => handleCreateNewTask(inputTask)}>
            <span>Criar</span>
            <PlusCircle size={16} />
          </button>
        </section>

        <section className={style.tasks}>
          <div className={style.info}>
            <div className={style.created}>
              <span>Tarefas criadas</span>
              <span>{numberTasks}</span>
            </div>
            <div className={style.done}>
              <span>Concluídas</span>
              <span>{numberTasksDone}</span>
            </div>
          </div>
          {tasks.length == 0 ? (
            <div className={style.empty}>
              <img src={clipboard} alt="ícone" />
              <p>Você ainda não tem tarefas cadastradas</p>
              <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
          ) : (
            <div className={style.listTasks}>
              {tasks.map((task) => (
                <Task
                  key={task.id}
                  task={task}
                  handleCompleted={handleCompleteTask}
                  handleDelete={handleDeleteTask}
                />
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
