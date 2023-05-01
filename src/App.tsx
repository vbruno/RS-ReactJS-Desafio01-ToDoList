import style from "./App.module.css";

import { PlusCircle } from "@phosphor-icons/react";
import { ChangeEvent, useState } from "react";
import logo from "./assets/Logo.png";
import { Task } from "./components/Task";

interface ITask {
  id: number;
  task: string;
  done: boolean;
  createdAt: Date;
  doneDate?: Date;
}

export function App() {
  const [inputTask, setInputTask] = useState("");
  const [task, setTask] = useState({});
  const [tasks, setTasks] = useState([]);

  function handleNewTextInputChange(event: ChangeEvent<HTMLInputElement>) {
    setInputTask(event.target.value);
  }

  function handleCreateNewTask() {
    setTask((prev) => {
      return {
        ...prev,
        id: 1,
        task: "tarefa 1",
        done: false,
        createdAt: new Date("2023-04-30"),
      };
    });

    setInputTask("");
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
          <button onClick={handleCreateNewTask}>
            <span>Criar</span>
            <PlusCircle size={16} />
          </button>
        </section>

        <section className={style.tasks}>
          <div className={style.info}>
            <div className={style.created}>
              <span>Tarefas criadas</span>
              <span>10</span>
            </div>
            <div className={style.done}>
              <span>Concluídas</span>
              <span>10</span>
            </div>
          </div>
          {/* <div className={style.empty}>
            <img src={clipboard} alt="ícone" />
            <p>Você ainda não tem tarefas cadastradas</p>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div> */}
          <div className={style.listTasks}>
            <Task />
            <Task />
            <Task />
          </div>
        </section>
      </main>
    </div>
  );
}
