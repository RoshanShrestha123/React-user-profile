import React from "react";
import './List.css';

function List(props){
    return(
        <div className="user-container" onClick={()=>props.handleClick(props.data.id)}>
            <div className="image-wrapper">
                <img src={props.data.profileImage} className="imageHolder" alt={props.data.name}></img>
            </div>
            <div className="user-detail-container">
                <span className="name">{props.data.firstName}</span>
                <span className="city">From "{props.data.address.city}"</span>
                
            </div>
             
        </div>
      
      
    )
}
export default List;