import React from "react";
import HOC from "./HOC";
// import { useState} from "react";
// import { useEffect } from "react";

const TodoList = ({data} ) => {
    console.log("data", data);
  //   const [todos, setTodos] = useState([]);
  //   const [term, setTerm] = useState("");
  //   useEffect(() => {
  //     const fetchtodos = async () => {
  //       const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  //       const json = await res.json();
  //       setTodos(json);
  //       //  console.log(json);
  //     };
  //     fetchtodos();
  //   }, []);
  const renderTodos = data.slice(0, 10).map((todo) => {
    // for rendering list on the screen
    return (
      <div key={todo.id}>
        <p>
          <b>{todo.title}</b>
        </p>
      </div>
    );
  });
  //   const filteredTodos = todos
  //   .slice(0, 10)                      // f0r search bar functionality
  //     .filter(({ title }) => {
  //       return title.indexOf(term) >= 0;
  //     })
  //     .map((todo) => {
  //       return (
  //         <div key={todo.userId}>
  //           <p>
  //             <b>{todo.title}</b>
  //           </p>
  //         </div>
  //       );
  //     });
  return (
    <div>
      {/* <h2>Todos</h2>
      <input
        type="text"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      /> */}
      <div>{renderTodos}</div>
    </div>
  );
};
const SearchTodos = HOC(TodoList, "todos");

// export default TodoList;
export default SearchTodos;
