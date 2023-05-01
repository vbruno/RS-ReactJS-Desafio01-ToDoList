import { Check, Trash } from "@phosphor-icons/react";
import { useState } from "react";
import { ITask } from "../interface/ITask";
import style from "./Task.module.css";

export function Task({ content, id, done }: ITask) {
  const [isTaskComplete, setIsTaskComplete] = useState(false);

  function toggleCheck() {
    setIsTaskComplete((isTaskComplete) => !isTaskComplete);
    console.log(isTaskComplete);
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
      <p className={isTaskComplete ? style.textComplete : ""}>{content}</p>
      <button title="Excluir" className={style.trash}>
        <Trash weight="bold" />
      </button>
    </div>
  );
}
