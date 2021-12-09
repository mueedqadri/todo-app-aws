import React from "react";
import "bootstrap/dist/css/bootstrap.css";

export default function ListElement(props){
    return(<li class="list-group-item">
    {props.title}
    <div class="d-flex justify-content-end">
      <button type="button" class="btn btn-outline-danger">
        Delete
      </button>
    </div>
  </li>)
}