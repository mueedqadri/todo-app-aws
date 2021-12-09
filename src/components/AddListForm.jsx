import React from "react";
import "bootstrap/dist/css/bootstrap.css";

export default function AddListForm(props){

    return(
        <form class="row g-2 mt-5">
              <div class="col-auto ">
                <input
                  type="text"
                  class="form-control"
                  value={props.newItemValue}
                  id="listElement"
                  placeholder="Type here...."
                  onChange={props.callbackToSetNewItem}
                />
              </div>
              <div class="col-auto">
                <button 
                    type="button" 
                    onClick={props.callbackToAdd}
                    className="btn btn-primary mb-3 ">
                  Add
                </button>
              </div>
            </form>
    )
}