import axios from "axios";
import { useEffect, useState } from "react"

function App() {
  const [counter, setCounter] = useState(0);
  const [sum, setSum] = useState(0);
  return (
    <div>
      <input onChange={(event) =>{
        let n = parseInt(event.target.value);
        setSum((n)*(n+1)/2)
      }} className="number"></input>

      <h1>Sum is {sum}</h1>

      <button onClick={()=>{
        setCounter(counter+1)
      }}>Counter ({counter})</button>
    </div>
  )
}

export default App

// Custom tags here we can pass props
// function Todo({id}){
//   const [todo, setTodo] = useState({});
  
//   useEffect(()=>{
//     axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`)
//     .then((res) => {
//       // console.log(res.data.todos)
//       setTodo(res.data.todo)
//     })
//   },[id])
  
//   return <div>
//    <h1>{todo.title}</h1>
//    <h3>{todo.description}</h3>
//   </div>
// }

//

{/* <button onClick={function(){
        setInpid(1)
      }}>1</button>

      <button onClick={function(){
        setInpid(2)
      }}>2</button>

      <button onClick={function(){
        setInpid(3)
      }}>3</button>

      <button onClick={function(){
        setInpid(4)
      }}>4</button>

      <Todo id={inpid}/> */}



// Wrappers 
// function CardWrapper({children}){
  //   return <div>
  //     <div style={{border: "2px solid black"}}>{children}</div>
  //   </div>
  // }
  
  {/* {todos.map(todo=> <Todo key={todo.id} title={todo.title} description={todo.description}/>)} */}


  // useEffect(()=>{
    //   axios("https://sum-server.100xdevs.com/todos?id="+todos.id)
    //   .then(function(res) {
      //     setTodos(res.data.todos)
      //   })
      // },[])