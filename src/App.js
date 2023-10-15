import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Todo from './Components/Todo-app/Todo';
import Api from './Geeksynergy/Api';
import Login from './Geeksynergy/Login';
import Routings from './Geeksynergy/Routings';
import Signup from './Geeksynergy/Signup';
import Counter from './Practice/Counter';
import Datefilter from './Practice/Datefilter';
import Form from './Practice/Form';
import Formvalidation from './Practice/Formvalidation';
import FrontTask from './Practice/FrontTask';
import GameTask from './ReturnJourney/GameTask';
import Task from './Paktolus/Task';
import Static from './Fitpeo/Static';

function App() {
  return (
    <>
    {/* <Todo/> */}
    {/* <Datefilter/> */}
    {/* <Counter/> */}
    {/* <Formvalidation/> */}
    {/* <Form/> */}
    {/* <FrontTask/> */}
    {/* <GameTask/> */}
    {/* <Signup/>
    <Login/>
    <Api/> */}
    {/* <BrowserRouter><Routings/>
</BrowserRouter> */}
{/* <Task/> */}
<Static/>
    </>
  );
}

export default App;
