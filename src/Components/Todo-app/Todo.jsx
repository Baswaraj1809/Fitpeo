import React, { useEffect, useState } from 'react';

function Todo() {
  const [data, setData] = useState([]);
  const [todo, setTodo] = useState('');
  const [Completed, setCompleted] = useState(false);
  const [but, setBut] = useState("completed");
  const [errorMessage, setErrorMessage] = useState('');

  const fetchData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1/todos', { method: 'GET' });
    const data = await response.json();
    setData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleInput = (e) => {
    setTodo(e.target.value);
  };

  const handleAdd = () => {
    if (todo.trim() !== '') {
      const newTodo = {
        id: data.length + 1,
        title: todo,
        completed: false,
      };
      setData([...data, newTodo]);
      setTodo('');
      setErrorMessage('');
    } else {
      setErrorMessage('Task can\'t be empty.');
    }
  };

  const handleCheckbox = (id) => {
    const updatedData = data.map((todoItem) =>
      todoItem.id === id ? { ...todoItem, completed: !todoItem.completed } : todoItem
    );
    setData(updatedData);
  };

  const handleUpdate = (id) => {
    const updatedTask = prompt('Enter updated task:');
    if (updatedTask !== null) {
      const updatedData = data.map((todoItem) =>
        todoItem.id === id ? { ...todoItem, title: updatedTask } : todoItem
      );
      setData(updatedData);
    }
  };

  const handleDelete = (id) => {
    const updatedData = data.filter((todoItem) => todoItem.id !== id);
    setData(updatedData);
  };

  const handlemaincheck = () => {
    setCompleted(!Completed);
  };

  const showAll = () => {
    setCompleted(false);
  };

  return (
    <div>
      <h1 style={{ marginLeft: '450px' }}>To-do Application</h1>
      <input style={{ marginLeft: '450px', height: '45px', width: '300px', border: '2px solid black', borderRadius: '10px' }} type="text" onChange={handleInput} value={todo} />
      <button style={{ backgroundColor: 'yellow', width: '100px', height: '45px', border: '2px solid green', borderRadius: '6px' }} onClick={handleAdd}>Add</button>
      {errorMessage && <div style={{ color: 'red', marginLeft: '450px' }}>{errorMessage}</div>}
      <div>
        <button style={{ backgroundColor: 'yellow', width: '100px', height: '45px', border: '2px solid green', borderRadius: '6px', marginLeft: '500px' }} onClick={handlemaincheck}>{but}</button>
        <button style={{ backgroundColor: 'yellow', width: '100px', height: '45px', border: '2px solid green', borderRadius: '6px', marginLeft: '50px' }} onClick={showAll}>All</button>
      </div>
      <ul className='list'>
        {data.map((ele) => (
          (!Completed || ele.completed) && (
            <div style={{ border: '2px solid black', margin: '10px', padding: '10px' }} key={ele.id}>
              <li style={{ listStyleType: 'none' }}>
                <input
                  type='checkbox'
                  checked={ele.completed}
                  onChange={() => handleCheckbox(ele.id)}
                />
                <h2 style={{ color: 'green' }} className={`task ${ele.completed ? 'completed-task' : ''}`}>
                  Task: <s>{ele.completed ? ele.title : ''}</s>
                  {!ele.completed ? ele.title : ''}
                </h2>
                <h2 style={{ color: 'red' }}>Status: {ele.completed ? 'Yes' : 'No'}</h2>
                <button style={{ marginRight: '20px', border: '2px solid green', borderRadius: '6px' }} onClick={() => handleUpdate(ele.id)}>Update</button>
                <button style={{ marginRight: '20px', border: '2px solid green', borderRadius: '6px' }} onClick={() => handleDelete(ele.id)}>Delete</button>
              </li>
            </div>
          )
        ))}
      </ul>
    </div>
  );
}

export default Todo;

