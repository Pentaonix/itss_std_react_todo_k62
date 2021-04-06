import React from 'react'

/* スタイルシート */
import './styles/main.css';

/* コンポーネント */
import Todo from './components/Todo';
import TodoItem from './components/TodoItem';

function App() {
  return (
    <div className="container is-fluid">
      <Todo />
    </div>
  );
}

export default App;
