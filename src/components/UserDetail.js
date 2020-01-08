import React from 'react';
import './UserDetail.css';

function UserDetail(props){
    console.log(props)
    return(
        <div className="user-detail-wrapper-container">
            <button  className="close" onClick={()=>{props.closeUserDetail()}}>close</button>
            <div className="user-detail-wrapper">
                <div className="user-profile-image-wrapper">
                <img src={props.data.profileImage} className="imageHolder" alt={props.data.name}></img>
                </div>
                <div className="user-profile-detail-wrapper">
                    <h1>{props.data.firstName} {props.data.lastName}</h1><br/>
                    <span>Email: {props.data.email}</span><br/>
                    <span>Phone: {props.data.phone}</span><br/>
                    <span>city: {props.data.address.city}</span><br/>
                    <span>state: {props.data.address.state}</span><br/>
                    <span>country: {props.data.address.country}</span><br/>
                    <span>zip code: {props.data.address.zipCode}</span><br/>
                    <span>country code: {props.data.address.countryCode}</span><br/>



                </div>
            
            
                
          
            </div>
        </div>
        
        
    )
}
export default UserDetail;