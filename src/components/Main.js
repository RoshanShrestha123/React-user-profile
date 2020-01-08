import React from 'react';
import List from './List';
import './Main.css';
import UserDetail from './UserDetail';

class Main extends React.Component{
    constructor(){
        super();
        this.state={
            data:[],
            isLoaded:false,
            showUserDetail:false,
            showUserId:null,
            showUserInfo:null
        }
    }
    componentDidMount(){
        fetch("https://mock-io.herokuapp.com/users")
            .then(response => response.json())
            .then(data => this.setState({
                data:data,
                isLoaded:true
            }))
    }
    displayUserDetail=(id)=>{
       
        
        this.state.data.filter(item =>{
            if(id === item.id){
                this.setState({
                    showUserDetail:true,
                    showUserInfo:item
                }); 
            }
           
        })
        
    }
    closeUserDetail=()=>{
        console.log(" i will close this page");
        this.setState({
            showUserDetail:false,
            showUserId:null
        });
    }
    handleClick=(id)=> {
        
        this.displayUserDetail(id);
    }
   
    render(){
        let userData= null;
        if(this.state.isLoaded){
            userData = this.state.data.map(list=>{
                return(
                    <List key={list.id} data={list} handleClick={this.handleClick}/>

                )
                   
               })
        }
        
        
        return(
            <div className="Main-wrapper">
                {userData}
               {
                   this.state.showUserDetail? <UserDetail closeUserDetail={this.closeUserDetail} data={this.state.showUserInfo}/> :""
               }

            </div>
         
        )
    }
}
export default Main;