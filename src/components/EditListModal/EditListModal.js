import React from "react";
import useToggle from "../../hooks/useToggle";
import { ImCross } from "react-icons/im"
import  "./EditListModal.css";

export default function EditListModal(props) {
    const [isDeleteMsg, toggleDeleteMsg] = useToggle(false);
    
    return (
        <div className="listEditModal">
            <div className="list_Actions">
                <h3>List Actions</h3>
                <button aria-label="Close" onClick={props.toggleListModal} className="listModalExit"><ImCross /></button>
            </div>
            <hr />
            <ul>
                <li onClick={function() {props.toggleListModal(); props.inputFocus();}}>Add card...</li>
                <li onClick={function() {props.toggleListModal(); props.toggleEditListTitle();}}>Rename list...</li>
                {isDeleteMsg ?
                    <li>Confirm list deletion:
                        <span className="confirmDeletebtns">
                            <button onClick={props.handleDelete} className="deleteBtn">Delete</button>
                            <button onClick={toggleDeleteMsg} className="cancelBtn">Cancel</button>
                        </span>
                    </li>
                    :
                    <li onClick={toggleDeleteMsg}>Delete list...</li>
                }
            </ul>
        </div>
    );
}