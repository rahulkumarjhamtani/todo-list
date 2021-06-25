import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import './style.css'
// import header from './mycomponents/header'
var initialstate = JSON.parse(localStorage.getItem('todos')) || [];

function App() {

  var [todos, settodo] = useState(initialstate);

  React.useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  console.log(initialstate);

  // if(initialstate.length != 0 && typeof initialstate != "undefined")
  // settodo(initialstate);

  const ondelete = (todo)=>{;
    console.log("Deleted",todos);
    settodo(todos.filter((e)=>{
      return e!==todo;
    }));
  }

  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const submit = (e)=>{
      e.preventDefault();
      if(!title || !desc)
      {
        alert("Fields cannot be empty");
      }
      addtodo(title,desc);
  }

  const addtodo = (title,desc) => {
    console.log("Todo",title,desc);
    // let sno = todos[todos.length-1].sno + 1;
    const newtodo = {
      // sno : sno,
      title: title,
      desc: desc
    }
    // settodo(todos.concat(newtodo));
    settodo([...todos,newtodo]);
    console.log(localStorage.getItem("todos"));
    console.log(newtodo);
  }

  
  return (
    <>
      {/* <header/> */}
        <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
  
          <a className="navbar-brand" href="#">My TODO List</a>
        </div>

        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav">
            <li className="active"><a href="#">Link <span className="sr-only">(current)</span></a></li>
            <li><a href="#">Link</a></li>
          </ul>
          <form className="navbar-form navbar-right">
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Search"/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </nav>

    <div className="container my-3">
      <h3>Add a Task</h3>
    <form onSubmit={submit}>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">Task Title</label>
        <input type="text" value={title} onChange={(e)=>settitle(e.target.value)} className="form-control" id="title"/>
      </div>
      <div className="mb-3">
        <label htmlFor="desc" className="form-label">Task Description</label>
        <input type="text" value={desc} onChange={(e)=>setdesc(e.target.value)} className="form-control" id="desc"/>
      </div>
      <button type="submit" className="btn btn-success btnmargin">Add</button>
    </form>
    </div>

    <div className="container">
      <h3 className="text-center my-3 heading">My List</h3>                       
      {todos.length===0? "There is no Task":
      todos.map((todo,index)=>{
      return(
        <div key={index}>
        <h4>{todo.title}</h4>
        <p>{todo.desc}</p>
        <button className="btn btn-danger" onClick={()=>{ondelete(todo)}}>Delete</button>
        </div>
      )}) }
      
    </div>
    </>
  )
}

export default App
