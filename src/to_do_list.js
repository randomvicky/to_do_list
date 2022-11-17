import React, { useState } from "react";

const ToDoList = (props) => {
  const [isEdit, setIsEdit] = useState(false);
  const [editText, setEditText] = useState(props.text);

  const onEditClick = (id) => {
    const isEditable = id === props.id;
    setIsEdit(isEditable);
  };

  const onInputChange = (e) => {
    setEditText(e.target.value);
  };
  const onSaveClick = () => {
    if (editText !== "") {
      setIsEdit(false);
    }
  };

  return (
    <>
      <div className="item_list">
        <i
          className="fa fa-times"
          aria-hidden="true"
          onClick={() => {
            props.onSelect(props.id);
          }}
        />
        {isEdit ? (
          <li>
            <input
              className="todo_input"
              type="text"
              value={editText}
              onChange={onInputChange}
            />
          </li>
        ) : (
          <li>{editText}</li>
        )}
        <button
          className="edit_item"
          onClick={() => (isEdit ? onSaveClick() : onEditClick(props.id))}
        >
          {isEdit ? "Save" : "Edit"}
        </button>
      </div>
    </>
  );
};
export default ToDoList;
