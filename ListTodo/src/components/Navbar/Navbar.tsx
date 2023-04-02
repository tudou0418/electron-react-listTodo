import React from 'react';
// 通过interface 来定义props组件，让ts帮我们检查
interface NavbarProps {
  title: string;
  onClearTodos: () => void;
}
// FunctionComponent缩写   函数组件
const Navbar: React.FC<NavbarProps> = ({ title, onClearTodos }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1">{title}</span>
        <button className="btn btn-danger" onClick={onClearTodos}>
          Clear All
        </button>
      </div>
    </nav>
  );
};

export default Navbar;