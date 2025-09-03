
import './App.css'
import Greeting from "./components/Greeting.jsx";
import LikeCounter from "./components/LikeCounter.jsx";
import UserList from "./components/UserList.jsx";
import Todo from "./components/Todo.jsx";
import Login from "./components/Login.jsx";

function App() {
  return <>
        <Greeting username="Dhiraj"/>
        {/*<LikeCounter/>*/}
        {/*<Todo />*/}
        <UserList />
        <hr/>
        <Login />

    </>

}

export default App
