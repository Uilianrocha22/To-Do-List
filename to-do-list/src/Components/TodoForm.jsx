import { useState } from "react";

import "../Components/TodoForm.scss";

export default function TodoForm({ addTodo }) {
  const [value, setValue] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (ev) => {
    ev.preventDefault();
    if (!value || !category) return;

    // Adicionar todo
    addTodo(value, category);

    //Limpar os campos
    setValue("");
    setCategory("");
  };

  return (
    <div className="todo-form">
      <h2>Criar Tarefa:</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Digite o titulo"
          value={value}
          onChange={(ev) => setValue(ev.target.value)}
        />
        <select
          value={category}
          onChange={(ev) => setCategory(ev.target.value)}
        >
          <option value="">Selecione uma categoria</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Estudos">Estudos</option>
          <option value="Pessoal">Pessoal</option>
        </select>
        <button type="submit">Criar Tarefa</button>
      </form>
    </div>
  );
}
