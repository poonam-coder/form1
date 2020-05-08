import React,{Component} from 'react';

export class Register extends Component{

    doRegister = (event)=>{
        event.preventDefault();
        let user = {email:event.target.email.value,password:event.target.password.value,name:event.target.name.value,city:event.target.city.value,phone:event.target.phone.value};
        this.props.register(user);
    }

    render()
    {
        return (
            <form onSubmit={this.doRegister}>
                <h6>Please register!</h6>
                <div>
                    <label>Enter email : </label>
                    <input type="text" name="email" className="form-control"></input>
                </div>

                <div>
                    <label>Enter password : </label>
                    <input type="password" name="password" className="form-control"></input>
                </div>

                <div>
                    <label>Enter name : </label>
                    <input type="text" name="name" className="form-control"></input>
                </div>

                <div>
                    <label>Enter city : </label>
                    <input type="text" name="city" className="form-control"></input>
                </div>

                <div>
                    <label>Enter phone : </label>
                    <input type="text" name="phone" className="form-control"></input>
                </div>

                <div>
                    <button className="btn btn-info">Sign Up</button>
                    <button className="btn btn-info">Cancel</button>
                </div>
            </form>
        );
    }


}