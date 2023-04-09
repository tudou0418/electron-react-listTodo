import React, { useState } from 'react';
import './TodoList.scss'
// 定义待办事项的类型
interface Todo {
  id: number;
  text: string;
  category: string;
}

// 定义TodoList组件的props类型
interface TodoListProps {
  todos: Todo[];
  setTodos: (todos: Todo[]) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, setTodos }) => {
  // 定义两个状态变量：newTodo和newCategory
  const [newTodo, setNewTodo] = useState('');
  const [newCategory, setNewCategory] = useState('');

  // 处理添加待办事项的函数
  const handleAddTodo = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (newTodo) {
      // 创建一个新的待办事项，并将其添加到待办事项列表中
      const newTodos = [...todos, { id: Date.now(), text: newTodo, category: newCategory }];
      setTodos(newTodos);

      // 重置newTodo和newCategory的值
      setNewTodo('');
      setNewCategory('');
    }
  };

  // 处理删除待办事项的函数
  const handleDeleteTodo = (id: number) => {
    // 通过id过滤掉要删除的待办事项，并更新待办事项列表的状态
    const newTodos = todos.filter(todo => todo.id !== id);
    setTodos(newTodos);
  };

  // 处理编辑待办事项的函数
  const handleEditTodo = (id: number, newText: string, newCategory: string) => {
    // 找到要编辑的待办事项，并将它的文本内容和分类更新为新的值
    const newTodos = [...todos];
    const index = newTodos.findIndex(todo => todo.id === id);
    newTodos[index] = { ...newTodos[index], text: newText, category: newCategory };
    setTodos(newTodos);
  };

  return (
    <div>
      {/* 添加待办事项的表单 */}
      <form onSubmit={handleAddTodo} className='handle_addTodo'>
        
        <input type="text" value={newTodo} onChange={(event) => setNewTodo(event.target.value)} placeholder="添加待办" /><input type="text" value={newCategory} onChange={(event) => setNewCategory(event.target.value)} placeholder="所属分类" />
        <button type="submit">添加</button>
      </form>
      {/* 待办事项列表 */}
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {/* 待办事项的文本内容 */}
            <input type="text" value={todo.text} onChange={(event) => handleEditTodo(todo.id, event.target.value, todo.category)} />
            {/* 待办事项的分类 */}
            <input type="text" value={todo.category} onChange={(event) => handleEditTodo(todo.id, todo.text, event.target.value)} />
            {/* 删除待办事项的按钮 */}
            <button onClick={() => handleDeleteTodo(todo.id)}>删除</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default TodoList;