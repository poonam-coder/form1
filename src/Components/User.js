import React,{Component} from 'react';
import { Login } from './Login';
import { Register } from './Register';
import { Home } from './Home';

export class User extends Component{

    state = {
        view:"login",
        message:"",
        loggedInUser:null,
        users:[
                {email:"sachin@birlasoft.com",password:"pass123",name:"sachin gupta",city:"pune",phone:"90909021",
                contacts:[{name:"ankit",city:"pune",phone:"909090",company:"infosys"},
                {name:"paresh",city:"pune",phone:"78454",company:"birlasoft"},
                {name:"kajal",city:"pune",phone:"87454",company:"kpit"}]},
                {email:"test",password:"test",name:"ramesh gupta",city:"mumbai",phone:"635463543",contacts:[]}]
    }

    getContacts = (email) =>{

        let temp = this.state.users.find(user=>user.email == email);
        return temp.contacts;
    }

    addContact = (email,contact)=>{
        let temp = this.state.users.find(user=>user.email == email);
        let contacts = temp.contacts.push(contact);       
        this.setState({
            message : "Contact Added"
        })
    }

    authenticate = (email,password) =>{
        let temp = this.state.users.find((user)=>user.email === email && user.password === password);
        
        if(temp)
        {
            this.setState({
                loggedInUser : email,
                view: "home"
            })
        }
        else{
            this.setState({
                message : "Invalid email or password"
            })
        }
    }

    register = (user) =>{

        let users = this.state.users;
        users.push(user);
        this.setState({
            users:users,
            message : "Registration successful"
        });
    }

    logout = ()=>{
        this.setState({
            loggedInUser : null,
            view:"login",
            message : "Logged out successfully"
        })
    }

    changeView = (view)=>{
        this.setState({
            view:view
        })
    }

    render()
    {
        let content = "";

        switch(this.state.view)
        {
            case "login" : content = <Login authenticate={this.authenticate}></Login>; break;
            case "register" : content = <Register register={this.register}></Register>; break;
            case "home" : content = <Home user={this.state.loggedInUser} logout={this.logout} getContacts={this.getContacts} addContact={this.addContact}></Home> ; break;
        }

        let content2 = this.state.message != "" ? this.state.message : "";
        
        let navbar = this.state.loggedInUser == null ? <nav><button className="btn btn-secondary" onClick={()=>{this.changeView('login')}}>login</button><button className="btn btn-secondary" onClick={()=>{this.changeView("register")}}>register</button> </nav>  : ""
        
        return (
            <div>
                {navbar}

                <div>
                    {content2}
                    {content}                    
                </div>
            </div>
        );
    }
}