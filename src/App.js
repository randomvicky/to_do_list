import React from "react";
import ToDoList from "./to_do_list";
import { useState } from "react";
import "./style.css";

const App = () => {
  const [userInput, setUserInput] = useState("");
  const [item, setItem] = useState([]);

  const inputItem = (event) => {
    setUserInput(event.target.value);
  };
  const itemList = () => {
    if (userInput !== "") {
      setItem((oldItems) => {
        return [...oldItems, userInput];
      });
      setUserInput("");
    }
  };
  const deleteItem = (id) => {
    setItem((oldItems) => {
      return oldItems.filter((arrElement, index) => {
        return index !== id;
      });
    });
  };

  return (
    <>
      <div className="app_div">
        <div className="item_detail">
          <h1>To Do List</h1>
          <input
            type="text"
            placeholder="Add Item"
            value={userInput}
            onChange={inputItem}
          />
          <button className="add_button" onClick={itemList}>
            Add
          </button>
          {item.length > 0 ? (
            <ol>
              {item.map((items, id) => {
                return (
                  <ToDoList
                    key={id}
                    id={id}
                    text={items}
                    onSelect={deleteItem}
                  />
                );
              })}
            </ol>
          ) : (
            <div className="empty_state"> Please Add ToDo</div>
          )}
        </div>
      </div>
    </>
  );
};
export default App;
