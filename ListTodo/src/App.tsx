import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import TodoList from './components/TodoList/TodoList';
import Head from './components/Head/Head';
import './App.css';

function App() {
  // 使用useState钩子定义todos状态和setTodos函数，初始值为一个空数组
  const [todos, setTodos] = useState<string[]>([]);
  const handleClearTodos = () => {
    setTodos([]);
  };

  
  // 处理更新待办事项列表的函数
  const handleSetTodos = (newTodos: Todo[]) => {
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <Head/>
      <div className='content'>
        <Navbar title="我的待办" onClearTodos={handleClearTodos} />
        <TodoList  todos={todos} setTodos={handleSetTodos}/>
      </div>
      </div>
  );
}

export default App;