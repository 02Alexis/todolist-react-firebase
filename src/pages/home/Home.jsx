import { useState, useEffect } from "react";
import {
  query,
  collection,
  onSnapshot,
  updateDoc,
  doc,
  addDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../../Firebase/firebaseConfig";
import Todo from "../task/Task";
import { MdTaskAlt } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Home() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  //create task
  const createTodo = async (e) => {
    e.preventDefault(e);
    if (input === "") {
      toast.error("Please enter a valid todo");
      return;
    }
    await addDoc(collection(db, "todos"), {
      text: input,
      completed: false,
    });
    toast.success("Nueva tarea creada correctamente");
    setInput("");
  };

  // Read todo from firebase
  useEffect(() => {
    const q = query(collection(db, "todos"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let todosArr = [];
      querySnapshot.forEach((doc) => {
        todosArr.push({ ...doc.data(), id: doc.id });
      });
      setTodos(todosArr);
    });
    return () => unsubscribe();
  }, []);

  // Update todo in firebase
  const toggleComplete = async (todo) => {
    await updateDoc(doc(db, "todos", todo.id), {
      completed: !todo.completed,
    });
  };

  // Delete todo
  const deleteTodo = async (id) => {
    await deleteDoc(doc(db, "todos", id));
    toast.success("Tarea eliminada correctamente");
  };

  return (
    <>
      <div className="bg-zinc-900 h-screen">
        <div className="container mx-auto p-10">

          <div className="max-w-md mx-auto">
            <form onSubmit={createTodo} className="bg-slate-800 p-10 mb-4">
              <h1 className="text-3xl font-bold text-center p-2 text-white mb-3">
                todo App
              </h1>
              <input
              className="bg-slate-300 border p-2 w-full text-xl"
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Add Todo"
              />
              <button className="p-4 ml-2 text-indigo-600">
                <MdTaskAlt size={30} />
              </button>
            </form>
          </div>

          <div>
            <ul className="grid grid-cols-4 gap-2">
              {todos.map((todo, index) => (
                <Todo
                  key={index}
                  todo={todo}
                  toggleComplete={toggleComplete}
                  deleteTodo={deleteTodo}
                />
              ))}
            </ul>
          </div>

          {todos.length === 0 ? (
            <p className="text-white text-4xl font-bold text-center">No hay Tareas aun</p>
          ) : (
            <p className="text-white text-4xl font-bold text-center">{`You have ${todos.length} Task`}</p>
          )}
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default Home;