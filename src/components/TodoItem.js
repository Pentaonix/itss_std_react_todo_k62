/* 
  【TodoItemコンポーネント】
　・Todoアイテムを表示する
　・チェックボックスにチェックが入っているか管理する
　・チェックボックスにチェックが入っているかアイテムをグレーアウトする
*/
import React, {useState} from "react";
function TodoItem( props ) {
  
  const [clicked, setclicked] = React.useState(false);
  
  const handleClick = () => {
    setclicked(!clicked);
  }
  return (
    <label className= {clicked ? "panel-block has-text-grey-light" : "panel-block"}>
      <input onClick={() => handleClick()} type="checkbox" />
      {props.quang.text}
    </label>
  );
}

export default TodoItem;