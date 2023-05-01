import { Check, Trash } from "@phosphor-icons/react";
import { useState } from "react";
import { ITask } from "../interface/ITask";
import style from "./Task.module.css";

interface ITaskProps {
  task: ITask;
  handleCompleted: (task: ITask) => void;
  handleDelete: (task: ITask) => void;
}

export function Task({ task, handleCompleted, handleDelete }: ITaskProps) {
  const [isTaskComplete, setIsTaskComplete] = useState(false);

  function toggleCheck() {
    setIsTaskComplete((isTaskComplete) => !isTaskComplete);

    const taskToggle: ITask = {
      id: task.id,
      content: task.content,
      done: isTaskComplete,
    };

    handleCompleted(taskToggle);
  }

  return (
    <div className={style.container}>
      <button className={style.btCheck} onClick={toggleCheck}>
        {isTaskComplete ? (
          <div className={style.iconCheckON}>
            <Check color="#f2f2f2" weight="bold" />
          </div>
        ) : (
          <div className={style.iconCheckOFF}></div>
        )}
      </button>
      <p className={isTaskComplete ? style.textComplete : ""}>{task.content}</p>
      <button
        title="Excluir"
        className={style.trash}
        onClick={() => handleDelete(task)}>
        <Trash weight="bold" />
      </button>
    </div>
  );
}
