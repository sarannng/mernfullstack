import React from "react";

function UserItem(props){
     return(
        <li className="user-item">
            <div className="user-item__content">
                <div className="user-item__image">
                    <img src = {props.image} alt= {props.name}/>
                </div>
                <div className="user-item__info">
                    <h2>{props.name}</h2>
                    <h3>{props.placecount} {props.placecount === 1? 'Place': 'Places'}</h3>
                </div> 
            </div>
        </li>
     );
}

export default UserItem;