import React, { useState } from 'react';
import { nanoid } from "nanoid";
import './appHook.css';
import { useNavigate } from "react-router-dom";

function AppHook() {
  let navigate = useNavigate();

  const [item_list, setList] = useState([])
  const [formData, setFormData] = useState("");

  const handleUpdateInput = (event) => {
    event.preventDefault();

    const newItem = event.target.value;
    setFormData(newItem);

  }

  const handleAddItem = (event) => {
    event.preventDefault();

    const newItem = {
      id: nanoid(),
      value: formData
    }

    const list = [...item_list];
    if (newItem.value === "") {
      alert("Please, type an item!");
      return;
    }
    list.push(newItem);
    setList(list);
    setFormData("");
  }

  const handleDeleteItem = (id) => {
    const list = [...item_list];

    const index = item_list.findIndex((item) => item.id === id)
    list.splice(index, 1);
    setList(list);
  }

  return (

    <div className="main_div">
      <div>
        <button class="hook_btn" onClick={() => { navigate("/class") }}>Class</button>
      </div>

      <div className="my_app">
        <div className="app_title">
          Add an Item...
        </div>
        <br />
        <div className="app_input">
          <input className="hook_input"
            type="text"
            required="required"
            placeholder="Type an Item"
            value={formData}
            onChange={handleUpdateInput}
          />
          <button className="hook_btn" onClick={handleAddItem}>
            Add
          </button>
        </div>
        <br />
        <div className="list_items">
          <ul className="my_list">
            {item_list.map(item => {
              return (
                <li className="my_list_item">
                  {item.value}
                  <button className="hook_btn" onClick={() => handleDeleteItem(item.id)}>
                    X
                  </button>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AppHook;
