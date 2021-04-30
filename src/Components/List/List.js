import React from 'react';
import '../List/list.css';
function List(props){
  return(
                 <div className="list">
                    <div className="text">
                    <p className="title">{props.title}</p>
                    </div>
                    <div className="edit-button">
                    <i className="far fa-edit"></i>
                    </div>
                    <div className="trash-button">
                    <i className="fas fa-trash"></i>
                    </div>
                </div>
    )
}

export default List;