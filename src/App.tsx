import style from "./App.module.css";

import { PlusCircle } from "@phosphor-icons/react";
import clipboard from "./assets/Clipboard.png";
import logo from "./assets/Logo.png";

export function App() {
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
          />
          <button>
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
          <div className={style.empty}>
            <img src={clipboard} alt="ícone" />
            <p>Você ainda não tem tarefas cadastradas</p>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>
          {/* <p>List</p> */}
        </section>
      </main>
    </div>
  );
}
