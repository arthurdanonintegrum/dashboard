import { Fragment } from "react";
import "./App.css";

//compnents

import InputTodo from "./components/InputTodo";
import ListTodos from "./components/ListTodos";

function App() {
  return (
    <Fragment>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6"><InputTodo/></div>
          <div className="col-lg-6"><ListTodos/></div>
        </div>
        
      </div>
    </Fragment>
  );
}

export default App;