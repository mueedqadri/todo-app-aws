import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.css";
import ListElement from './ListElement';
import AddListForm from './AddListForm';

export default function ToDo() {
  const [newItem, setNewItem] = useState('');
  const [list, setList] = useState(['one', 'two', 'three'])
  
  const callbackToAdd=()=>{
    list.push(newItem);
    setList(list);
    setNewItem('');
  }

  const callbackToSetNewItem = (event)=>{
    setNewItem(event.target.value)
  }

  return (
    <div>
      <div className="container ">
        <div className="row">
          <div className="col-sm"></div>
          <div className="col-sm mt-5 ">
            <h3>To-Do List</h3>
            <ul class="list-group">
              {
                list.map(u => {
                  return <ListElement title={u}/>
                })}
            </ul>
            <AddListForm 
              callbackToAdd={callbackToAdd}
              callbackToSetNewItem = {callbackToSetNewItem}
              newItemValue= {newItem}
              />
          </div>
          <div className="col-sm"></div>
        </div>
      </div>
    </div>
  );
}
